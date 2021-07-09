import React, { useState } from 'react';
import Login from './components/login/Login.js';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import useToken from './components/token/useToken';
import Navigation from './components/navigation/navigation.js';
import AboutPage from './pages/about-page';
import HomePage from './pages/home-page';
import ExpensesPage from './pages/expenses-page.js';
import GlobalProvider from './context/GlobalState';

import './App.css';

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
        {ifTokenExists(<Navigation />)}
        <GlobalProvider>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/expenses">
              {ifTokenExists(<ExpensesPage />)}
            </Route>
            <Route exact path="/about">
              {ifTokenExists(<AboutPage />)}
            </Route>
          </Switch>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
