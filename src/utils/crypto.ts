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

export function decryptCredential(credential: Credential): Credential {
  const decryptedPassword = CryptoJS.TripleDES.decrypt(
    credential.password,
    'supersecretkey'
  ).toString(CryptoJS.enc.Utf8);
  const cryptedCredential = { ...credential, password: decryptedPassword };
  return cryptedCredential;
}
