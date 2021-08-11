import fs from 'fs/promises';
import type { DB, Credential } from '../types';

export async function readCredentials(): Promise<Credential[]> {
  const response = await fs.readFile('src/db.json', 'utf-8');
  const db: DB = JSON.parse(response);
  const credentials = db.credentials;
  return credentials;
}

export async function getCredential(service: string): Promise<Credential> {
  const credentials = await readCredentials();
  const credential = credentials.find((item) => item.service === service);

  if (!credential) {
    throw new Error(`No credential found for service: ${service}`);
  } else {
    return credential;
  }
}
