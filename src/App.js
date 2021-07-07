import React from 'react';
import LoginPage from './pages/login-page/LoginPage';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/expenses">
          Expenses
        </Route>
      </Switch>
    </div>
  );
}

export default App;
