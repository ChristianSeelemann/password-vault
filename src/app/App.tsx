import React from 'react';
import styles from './App.module.css';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Password from './pages/Password/Password';

function App(): JSX.Element {
  return (
    <Router>
      {/*       <nav className={styles.navigation}>
        <ul>
          <Link to="/">
            <li>Dashboard</li>
          </Link>
          <Link to="/password/facebook">
            <li>Passwords</li>
          </Link>
        </ul>
      </nav> */}
      <h1>Vault</h1>
      <Switch>
        <Route path="/password/:service">
          <div className={styles.container}>
            <Password />
          </div>
        </Route>
        <Route path="/">
          <div className={styles.container}>
            <Dashboard />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
