import React, { useState } from 'react';
import Dot_1 from '../assets/Dot_01.png';
import Dot_013 from '../assets/Dot_013.png';
import Dot_5 from '../assets/Dot_05.png';
import Dot_7 from '../assets/Dot_07.png';
import Dot_8 from '../assets/Dot_08.png';
import './Home.css';
import ContactPage from './ContactPage';
import Menu from './layout/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import { motion } from 'framer-motion';

const Home = () => {
  const [menu, setMenu] = useState(null);

  return (
    <div className='home_wrapper'>
      <motion.div className='menu-wrapper' whileHover={{ color: '#f8e112' }}>
        <MenuIcon onClick={() => setMenu(true)} />
        <Menu onClose={() => setMenu(false)} menu={menu} />
      </motion.div>

      <motion.img
        className='dot_1'
        animate={{
          rotate: 360,
        }}
        transition={{ repeat: Infinity, duration: 5 }}
        src={Dot_1}
      />

      <motion.img
        className='dot_13'
        animate={{
          rotate: -360,
        }}
        transition={{ repeat: Infinity, duration: 5 }}
        src={Dot_013}
      />
      <ContactPage />
      <motion.img
        className='dot_5'
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: '100%',
        }}
        src={Dot_5}
      />

      <motion.img className='dot_7' src={Dot_7} />

      <motion.img
        className='dot_8'
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        src={Dot_8}
      />
    </div>
  );
};

export default Home;
