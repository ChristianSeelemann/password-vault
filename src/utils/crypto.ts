import CryptoJS from 'crypto-js';
import type { Credential } from '../types';

export function encryptCredential(credential: Credential): Credential {
  const encryptedPassword = CryptoJS.TripleDES.encrypt(
    credential.password,
    'supersecretkey'
  ).toString();
  const cryptedCredential = { ...credential, password: encryptedPassword };
  return cryptedCredential;
}
