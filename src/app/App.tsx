import React from 'react';
import styles from './App.module.css';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <Router>
      <Link to="/">
        <li>Dashboard</li>
      </Link>
      <Link to="/services">
        <li>Services</li>
      </Link>
      <Switch>
        <Route path="/services">
          <div>Services</div>
        </Route>
        <Route path="/">
          <div className={styles.container}>
            <h1>Password-Vault</h1>
            <Dashboard />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
