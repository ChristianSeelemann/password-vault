export type DB = { credentiels: Credential[] };

export type Credential = {
  service: string;
  username: string;
  password: string;
};
