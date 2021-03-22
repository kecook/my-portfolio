import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './comps/about/About';
import Projects from './comps/projects/Projects';
import Navbar from './comps/navbar/Navbar';
import Home from './comps/home/Home';
import ProjectThumbNail from './comps/projects/ProjectThumbNail';
import data from './data/data';
import {
  homePath,
  projectsPath,
  aboutPath,
  shoppiesPath,
  githubPath,
} from './constants/constants';
import Footer from './comps/footer/Footer';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path={homePath} component={Home} />
          <Route exact path={projectsPath} component={Projects} />
          <Route exact path={aboutPath} component={About} />
          <Route exact path={shoppiesPath}>
            <ProjectThumbNail singleProject={data[0]} />
          </Route>
          <Route exact path={githubPath}>
            <ProjectThumbNail singleProject={data[1]} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
