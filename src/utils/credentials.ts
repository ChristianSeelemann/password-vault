import fs from 'fs/promises';
import type { DB, Credential } from '../types';

export async function readCredentials(): Promise<Credential[]> {
  try {
    const response = await fs.readFile('src/db.json', 'utf-8');
    const db: DB = JSON.parse(response);
    const credentials = db.credentials;
    return credentials;
  } catch (err) {
    return err;
  }
}
