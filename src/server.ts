import express from 'express';
import { readCredentials, getCredential } from './utils/credentials';

const app = express();
const port = 3000;

app.get('/', (_request, response) => {
  response.send('Hello World!');
});

app.get('/credentials', async (_request, response) => {
  const credentials = await readCredentials();
  response.status(200).json(credentials);
});

app.get('/credentials/:service', async (request, response) => {
  const { service } = request.params;
  const output = await getCredential(service);
  console.log(`We have a call to ${service}`);
  response.status(200).json(output);
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
