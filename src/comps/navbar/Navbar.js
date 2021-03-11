import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { motion } from 'framer-motion';
import Menu from '../layout/Menu';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
  const { menu, setMenu } = useState(false);

  return (
    <nav className='navbar'>
      <div className='navbar-wrapper'>
        <motion.div className='menuWrapper' whileHover={{ scale: 1.2 }}>
          <MenuIcon onClick={() => setMenu(true)} />
          <Menu onClose={() => setMenu(false)} menu={menu} />
        </motion.div>

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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
