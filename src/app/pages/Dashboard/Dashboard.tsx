import React from 'react';

export default function Dashboard(): JSX.Element {
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
    </main>
  );
}
