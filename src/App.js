import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './comps/about/About';
import Projects from './comps/projects/Projects';
import Navbar from './comps/navbar/Navbar';
import Home from './comps/home/Home';
import GitHubFinder from './comps/gitHubFinder/GitHubFinder';
import Shoppies from './comps/shoppies/Shoppies';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/about' component={About} />
          <Route exact path='/shoppies' component={Shoppies} />
          <Route exact path='/githubfinder' component={GitHubFinder} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
