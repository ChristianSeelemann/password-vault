import { readFile } from 'fs/promises';
import CryptoJS from 'crypto-js';

export async function validateMasterpassword(
  password: string
): Promise<boolean> {
  const hashedMasterpassword = await readFile('.password', 'utf-8');
  const hashedPassword = CryptoJS.SHA256(password).toString();

  return hashedMasterpassword === hashedPassword;
}
