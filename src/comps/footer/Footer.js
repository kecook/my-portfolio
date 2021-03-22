import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
  return (
    <div className='navbar'>
      <div className='navbar-wrapper'>
        <div className='icons'>
          <Link to='/' className='about'>
            Home
          </Link>
          <GitHubIcon color='primary' />
          <LinkedInIcon color='primary' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
