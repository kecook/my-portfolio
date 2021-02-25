import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import { motion } from 'framer-motion';

const Menu = ({ menu, onClose }) => {
  if (!menu) {
    return null;
  }
  return (
    <div className='menu' onClick={onClose}>
      <div className='menu-content' onClick={(e) => e.stopPropagation()}>
        <ul>
          <motion.li whileHover={{ scale: 1.3, color: '#db4372' }}>
            <Link to='/'>Home</Link>
          </motion.li>

          <motion.li whileHover={{ scale: 1.3, color: '#db4372' }}>
            <Link to='/projects'>Projects</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.3, color: '#db4372' }}>
            <Link to='/aboutme'>About me</Link>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
