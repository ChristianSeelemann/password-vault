import React from 'react';
import { useParams } from 'react-router';

export default function Password(): JSX.Element {
  const { service } = useParams<{ service: string }>();
  return (
    <main>
      <h2>Passwords</h2>
      <div>Password is: {service}</div>
    </main>
  );
}
