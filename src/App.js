import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './comps/about/About';
import Navbar from './comps/navbar/Navbar';
import Home from './comps/home/Home';
import ProjectThumbNail from './comps/projects/ProjectThumbNail';
import data from './data/data';
import {
  homePath,
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
          <Route exact path={aboutPath} component={About} />
          <Route exact path={shoppiesPath}>
            <ProjectThumbNail singleProject={data[0]} />
          </Route>
          <Route exact path={githubPath}>
            <ProjectThumbNail singleProject={data[1]} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
