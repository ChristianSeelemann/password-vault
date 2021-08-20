import React from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Password from './pages/Password/Password';
import Credentials from './pages/Credentials/Credentials';
import Add from './pages/Add/Add';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/password/:service">
          <div className="container">
            <Password />
          </div>
        </Route>
        <Route path="/credentials/add">
          <div className="container">
            <Add />
          </div>
        </Route>
        <Route path="/credentials">
          <div className="container">
            <Credentials />
          </div>
        </Route>
        <Route path="/">
          <div className="container">
            <Dashboard />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
