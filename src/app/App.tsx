import React from 'react';
import styles from './App.module.css';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1>Password-Vault</h1>
      <Dashboard />
    </div>
  );
}

export default App;
