import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './comps/about/About';
import Projects from './comps/projects/Projects';
import Navbar from './comps/navbar/Navbar';
import Home from './comps/home/Home';
import GitHubFinder from './comps/gitHubFinder/GitHubFinder';
import Shoppies from './comps/shoppies/Shoppies';
import {
  homePath,
  projectsPath,
  aboutPath,
  shoppiesPath,
  githubPath,
} from './constants/constants';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path={homePath} component={Home} />
          <Route exact path={projectsPath} component={Projects} />
          <Route exact path={aboutPath} component={About} />
          <Route exact path={shoppiesPath} component={Shoppies} />
          <Route exact path={githubPath} component={GitHubFinder} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
