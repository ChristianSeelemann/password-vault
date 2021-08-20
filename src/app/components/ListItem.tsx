import React from 'react';
import styles from '../pages/Credentials/Credentials.module.css';

function ListItem({ credential }): JSX.Element {
  return (
    <div className={styles.card}>
      <h2>{credential.service}</h2>
      <p>Username: {credential.username}</p>
      <p>Password: {credential.password}</p>
    </div>
  );
}

export default ListItem;
