import React, { useEffect, useState } from 'react';
import type { Credential } from '../../../types';

export default function Dashboard(): JSX.Element {
  const [credentials, setCredentials] = useState<Credential[]>([]);

  useEffect(() => {
    async function fetchCredentials() {
      const response = await fetch('/api/credentials', {
        headers: { Authorization: 'supersecretkey' },
      });
      const credentials = await response.json();
      setCredentials(credentials);
    }
    fetchCredentials();
  }, []);

  return (
    <main>
      <h2>Dashboard</h2>
      <div>
        <label>
          <p>Please log in...</p>
          <input
            type="text"
            name="search"
            placeholder="Type your Masterpassword"
          />
        </label>
      </div>
      {credentials?.forEach((credential) => console.log(credential))}
    </main>
  );
}
