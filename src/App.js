import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './comps/About';
import Projects from './comps/Projects';
import Navbar from './comps/layout/Navbar';
import Home from './comps/Home';
import ProjectSummary from './comps/layout/ProjectSummary/ProjectSummary';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <ProjectSummary />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/about' component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
