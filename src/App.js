import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './comps/AboutMe';
import Projects from './comps/Projects';
import Navbar from './comps/layout/Navbar';
import Home from './comps/Home';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/aboutme' component={AboutMe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
