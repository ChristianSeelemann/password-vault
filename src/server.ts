import express from 'express';
import { readCredentials, getCredential } from './utils/credentials';

const app = express();
const port = 3000;

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

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
