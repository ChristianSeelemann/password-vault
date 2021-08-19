import React, { useEffect, useState } from 'react';
import type { Credential } from '../../../types';

export default function Dashboard(): JSX.Element {
  const [credentials, setCredentials] = useState<Credential[]>([]);
  const [masterPassword, setMasterpasswort] = useState('');

  useEffect(() => {
    async function fetchCredentials() {
      const response = await fetch('/api/credentials', {
        headers: { Authorization: masterPassword },
      });
      const credentials = await response.json();
      setCredentials(credentials);
    }
    fetchCredentials();
    if (!masterPassword) {
      setCredentials([]);
    }
  }, [masterPassword]);

  return (
    <main>
      <h2>Dashboard</h2>
      <div>
        <label>
          <p>Please log in...</p>
          <input
            type="password"
            name="search"
            placeholder="Type your Masterpassword"
            value={masterPassword}
            onChange={(event) => setMasterpasswort(event.target.value)}
          />
        </label>
      </div>
      {credentials?.map((credential) => (
        <div>
          <p>{credential.service}</p>
          <p>{credential.username}</p>
          <p>{credential.password}</p>
        </div>
      ))}
    </main>
  );
}
