import fs from 'fs/promises';
import type { DB, Credential } from '../types';
import { encryptCredential, decryptCredential } from './crypto';

export async function readCredentials(): Promise<Credential[]> {
  const response = await fs.readFile('src/db.json', 'utf-8');
  const db: DB = JSON.parse(response);
  const credentials = db.credentials;
  return credentials;
}

export async function getCredential(
  service: string,
  key: string
): Promise<Credential> {
  const credentials = await readCredentials();
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
  const credentials = await readCredentials();
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

export async function deleteCredential(service: string): Promise<void> {
  const credentials = await readCredentials();
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
  credential: Credential
): Promise<void> {
  const credentials = await readCredentials();
  const oldDB = credentials.filter(
    (credential) => credential.service !== service
  );
  const newDB: DB = { credentials: [...oldDB, credential] };
  const newJSON = JSON.stringify(newDB, null, 2);
  fs.writeFile('src/db.json', newJSON, 'utf-8');
}
