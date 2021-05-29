import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import About from './components/About/About';
import Books from './components/Books/Books';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home/Home';
import LogIn from './components/LogIn/LogIn';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/books">
            <Books></Books>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
