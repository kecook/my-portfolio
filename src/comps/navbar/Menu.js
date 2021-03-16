import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import { motion } from 'framer-motion';
// import { SettingsPowerRounded } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';

const Menu = () => {
  // if (!menu) {
  //   return null;
  // }
  return (
    <div className='menu-content'>
      {/* <MenuIcon /> */}

      <ul>
        <motion.li
          whileHover={{ scale: 1.3, color: '#db4372' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link to='/'>Home</Link>
        </motion.li>

        <motion.li
          whileHover={{ scale: 1.3, color: '#db4372' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link to='/projects'>Projects</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.3, color: '#db4372' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link to='/about'>About</Link>
        </motion.li>
      </ul>
    </div>
  );
};

export default Menu;
