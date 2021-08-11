import express from 'express';
import type { Credential } from './types';
import {
  readCredentials,
  getCredential,
  addCredential,
  deleteCredential,
} from './utils/credentials';

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
  try {
    const output = await getCredential(service);
    console.log(`We have a call to ${service}`);
    response.status(200).json(output);
  } catch (error) {
    console.error(error);
    response.status(404).send(`Could not find ${service} credential.`);
  }
});

app.post('/credentials', async (request, response) => {
  const credential: Credential = request.body;
  await addCredential(credential);
  response.status(200).send(credential);
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

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
