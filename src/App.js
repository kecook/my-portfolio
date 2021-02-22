import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './comps/AboutMe';
import ContactPage from './comps/ContactPage';
import Projects from './comps/Projects';
import Navbar from './comps/layout/Navbar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/aboutme' component={AboutMe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
