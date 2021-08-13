import fs from 'fs/promises';
import type { DB, Credential } from '../types';
import { encryptCredential, decryptCredential } from './crypto';

export async function readCredentials(key: string): Promise<Credential[]> {
  try {
    const response = await fs.readFile('src/db.json', 'utf-8');
    const db: DB = JSON.parse(response);
    const credentials = db.credentials;
    return credentials;
    const decryptedCredentials = credentials.map((credential) => {
      return (credential = decryptCredential(credential, key));
    });
    return decryptedCredentials;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}

export async function getCredential(
  service: string,
  key: string
): Promise<Credential> {
  const credentials = await readCredentials(key);
  const credential = credentials.find(
    (item) => item.service.toLowerCase() === service.toLowerCase()
  );

  if (!credential) {
    throw new Error(`No credential found for service: ${service}`);
  } else {
    const decryptedCredential = decryptCredential(credential, key);
    return decryptedCredential;
  }
}

export async function addCredential(
  credential: Credential,
  key: string
): Promise<void> {
  const credentials = await readCredentials(key);
  const updatedCredentials = [
    ...credentials,
    encryptCredential(credential, key),
  ];
  const database: DB = {
    credentials: [],
  };
  database.credentials = updatedCredentials;
  await fs.writeFile('src/db.json', JSON.stringify(database, null, 2));
}

export async function deleteCredential(
  service: string,
  key: string
): Promise<void> {
  const credentials = await readCredentials(key);
  const updatedCredentials = credentials.filter(
    (credential) => credential.service.toLowerCase() !== service.toLowerCase()
  );
  const database: DB = {
    credentials: updatedCredentials,
  };
  await fs.writeFile('src/db.json', JSON.stringify(database, null, 2));
}

export async function updateCredential(
  service: string,
  credential: Credential,
  key: string
): Promise<void> {
  const credentials = await readCredentials(key);
  const oldDB = credentials.filter(
    (credential) => credential.service !== service
  );
  const newDB: DB = { credentials: [...oldDB, credential] };
  const newJSON = JSON.stringify(newDB, null, 2);
  fs.writeFile('src/db.json', newJSON, 'utf-8');
}
