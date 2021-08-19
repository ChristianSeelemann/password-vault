import React from 'react';

export default function Dashboard(): JSX.Element {
  return (
    <main>
      <h2>Dashboard</h2>
      <div>
        <label>
          <p>Which password do you want?</p>
          <input
            type="text"
            name="search"
            placeholder="Search your password..."
          />
        </label>
      </div>
    </main>
  );
}
