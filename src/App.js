import './App.css';
import {
  BrowserRouter as Router, Route,
  Switch,
} from 'react-router-dom'

import {  Nav } from "react-bootstrap";
import Home from './components/Home'
import About from './components/About'


import { useState, useEffect } from "react";



function App() {
  (console.log("APP.js start point"));
  // Use state section
  

  useEffect(() => {
    // Verify when it renders
    (console.log("APP.js is rendering"));
  })


  
  return (
    <Router>
      <div className="App">
        <Nav justify variant="tabs" defaultActiveKey="/Home">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
        </Nav>
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
