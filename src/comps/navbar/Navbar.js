import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { motion } from 'framer-motion';
import Menu from '../layout/Menu';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
  // const { menu, setMenu } = useState(false);
  const [menu, setMenu] = useState(false);

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
          <Link to='/projects' className='projects'>
            Projects
          </Link>
          <MenuIcon></MenuIcon>
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
