import React from 'react';
import { useParams } from 'react-router';
import styles from '../../App.module.css';

export default function Password(): JSX.Element {
  const { service } = useParams<{ service: string }>();
  return (
    <main className={styles.container}>
      <h2>Passwords</h2>
      <div>Password is: {service}</div>
    </main>
  );
}
