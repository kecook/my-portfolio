import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import { AnimatePresence, motion } from 'framer-motion';

const Menu = ({ menu, onClose }) => {
  if (!menu) {
    return null;
  }
  return (
    <AnimatePresence>
      <motion.div
        className='menu'
        onClick={onClose}
        animate={{ width: 192 }}
        initial={{ Width: 0 }}
        exit={{ width: 0 }}
      >
        <div className='menu-content' onClick={(e) => e.stopPropagation()}>
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
      </motion.div>
    </AnimatePresence>
  );
};

export default Menu;
