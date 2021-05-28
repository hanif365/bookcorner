import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import Books from './components/Books/Books';
import Contact from './components/Contact/Contact';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div>
      <Home></Home>
      <h1>Developer 1 test3</h1>
      <h2>Developer 3 test1</h2>
    </div>
  );
}

export default App;
