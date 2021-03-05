import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { motion } from 'framer-motion';
import Dot_23 from '../../assets/Dot_023.png';
import Dot_17 from '../../assets/Dot_017.png';

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className='navbar'>
      <div className='navbar-wrapper'>
        {/* <motion.div className='menuWrapper' whileHover={{ scale: 1.2 }}>
          <MenuIcon onClick={() => setMenu(true)} />
          <Menu onClose={() => setMenu(false)} menu={menu} />
        </motion.div> */}

        <h2 className='banner'>
          <Link to='/' className='linkHome'>
            Speak Memory
          </Link>
        </h2>

        <div className='icons'>
          <motion.img
            src={Dot_23}
            className='linkDots'
            whileHover={{ scale: 1.2 }}
          ></motion.img>
          <Link to='/about' className='about'>
            About
          </Link>
          <motion.img
            src={Dot_17}
            className='linkDots'
            whileHover={{ scale: 1.2 }}
          ></motion.img>
          <Link to='/projects' className='projects'>
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
