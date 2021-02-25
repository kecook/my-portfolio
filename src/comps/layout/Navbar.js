import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Menu from './Menu';
import MenuIcon from '@material-ui/icons/Menu';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [menu, setMenu] = useState(null);

  return (
    <nav className='navbar'>
      <div className='navbar-wrapper'>
        <h2 className='banner'>
          Welcome to speak memory, a digital collection of apps.
        </h2>
        {/* <motion.div className='menu-wrapper' whileHover={{ scale: 1.2 }}>
          <MenuIcon onClick={() => setMenu(true)} />
          <Menu onClose={() => setMenu(false)} menu={menu} />
        </motion.div> */}

        {/* <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/aboutme'>About me</Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
