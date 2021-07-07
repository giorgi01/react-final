import React, { useState } from 'react';
import Login from './components/login/Login.js';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import useToken from './components/token/useToken';
import Navigation from './components/navigation/navigation.js';

function App() {
  const { token, setToken } = useToken();

  const ifTokenExists = (comp) => {
    return !token ? <Login setToken={setToken} /> : comp;
  };

  return !token ? (
    <Login setToken={setToken} />
  ) : (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {ifTokenExists(<Navigation />)}
          </Route>
          <Route exact path="/expenses">
            {/* {ifTokenExists(<ExpensesManager />)} */}
          </Route>
          <Route exact path="/about">
            {/* {ifTokenExists(<About />)} */}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
