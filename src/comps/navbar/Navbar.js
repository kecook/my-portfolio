import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-wrapper'>
        <h2 className='banner'>
          <Link to='/' className='linkHome'>
            Kate Cook
          </Link>
        </h2>

        <div className='icons'>
          <Link to='/about' className='about'>
            About
          </Link>
          <a href='//https://github.com/kecook' className='iconLink'>
            <GitHubIcon color='primary' />
          </a>
          <a href='https://www.linkedin.com/in/katelin-cook/' className='iconLink'>
            <LinkedInIcon color='primary' />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
