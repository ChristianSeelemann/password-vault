import fs from 'fs/promises';
import type { DB } from '../types';

export async function readCredentials(): Promise<DB> {
  try {
    const response = await fs.readFile('src/db.json', 'utf-8');
    const db = JSON.parse(response);
    const credentials = db.credentials;
    return credentials;
  } catch (err) {
    return err;
  }
}
