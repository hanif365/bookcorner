import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">

          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
