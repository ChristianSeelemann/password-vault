import express from 'express';
import type { Credential } from './types';
import {
  readCredentials,
  getCredential,
  addCredential,
  deleteCredential,
  updateCredential,
} from './utils/credentials';
import { validateMasterpassword } from './utils/validation';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (_request, response) => {
  response.send('Hello World!');
});

app.get('/credentials', async (_request, response) => {
  try {
    const credentials = await readCredentials();
    response.status(200).json(credentials);
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .send(`There is a problem with the server 🤕 Please try again later.`);
  }
});

app.get('/credentials/:service', async (request, response) => {
  const { service } = request.params;
  const masterPassword = request.headers.authorization;
  if (!masterPassword) {
    response.status(400).send('Authorization header missing');
    return;
  } else if (!(await validateMasterpassword(masterPassword))) {
    response.status(401).send('Unauthorized request');
    return;
  }
  try {
    const credential = await getCredential(service, masterPassword);
    console.log(`We have a call to ${service}`);
    response.status(200).json(credential);
  } catch (error) {
    console.error(error);
    response.status(404).send(`Could not find ${service} credential.`);
  }
});

app.post('/credentials', async (request, response) => {
  const credential: Credential = request.body;

  const masterPassword = request.headers.authorization;
  if (!masterPassword) {
    response.status(400).send('Authorization header missing');
    return;
  } else if (!(await validateMasterpassword(masterPassword))) {
    response.status(401).send('Unauthorized request');
    return;
  }
  await addCredential(credential, masterPassword);
});

app.delete('/credentials/:service', async (request, response) => {
  const { service } = request.params;
  try {
    deleteCredential(service);
    response.status(200).send('Deleted.');
  } catch (error) {
    console.error;
    response
      .status(500)
      .send(`There is a problem with the server 🤕 Please try again later.`);
  }
});

app.put('/credentials/:service', async (request, response) => {
  const { service } = request.params;
  const credential: Credential = request.body;
  try {
    await updateCredential(service, credential);
    response.status(200).json(`${service} replaced sucesfully.`);
  } catch (error) {
    console.error(error);
    response.status(404).send(`Could not find ${service}.`);
  }
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
