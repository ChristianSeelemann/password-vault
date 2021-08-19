import React from 'react';
import styles from './Dashboard.module.css';

export default function Dashboard(): JSX.Element {
  return (
    <main className={styles.container}>
      <h2>Dashboard</h2>
      <div>
        <label>
          <p>Which password do you want?</p>
          <input type="text" name="search" />
        </label>
      </div>
    </main>
  );
}
