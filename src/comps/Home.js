import React, { useState } from 'react';
import Dot_1 from '../assets/Dot_01.png';
import Dot_24 from '../assets/Dot_024.png';
import Dot_5 from '../assets/Dot_05.png';
import Dot_6 from '../assets/Dot_06.png';
import Dot_15 from '../assets/Dot_015.png';
import Dot_25 from '../assets/Dot_025.png';
import Dot_19 from '../assets/Dot_019.png';
import Dot_17 from '../assets/Dot_017.png';
import Dot_23 from '../assets/Dot_023.png';
import Dot_14 from '../assets/Dot_014.png';
import Dot_11 from '../assets/Dot_011.png';
import Dot_08 from '../assets/Dot_08 .png';

import './Home.css';
import ContactPage from './ContactPage';
import { motion } from 'framer-motion';

const Home = () => {
  const fadeRight = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='home_wrapper'>
      <motion.img
        className='dot dot_1'
        animate={{
          rotate: 360,
        }}
        transition={{ repeat: Infinity, duration: 5 }}
        src={Dot_1}
      />

      <motion.img
        className='dot dot_6'
        variants={fadeRight}
        animate='visible'
        animate={{
          rotate: -360,
        }}
        transition={{ repeat: Infinity, duration: 10 }}
        src={Dot_6}
      />
      <motion.img
        className='dot dot_5'
        variants={fadeRight}
        initial='hidden'
        animate='visible'
        transition={{ duration: 2 }}
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: '100%',
        }}
        src={Dot_5}
      />

      <motion.img
        className='dot dot_15'
        variants={fadeRight}
        initial='hidden'
        animate='visible'
        transition={{ duration: 2 }}
        drag={true}
        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 300 }}
        whileHover={{ scale: 1.2 }}
        src={Dot_15}
      />

      <motion.img
        className='dot dot_24'
        animate={{ scale: 1.3 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        src={Dot_24}
      />
      <motion.img
        className='dot dot_25'
        variants={fadeRight}
        initial='hidden'
        animate='visible'
        transition={{ duration: 4 }}
        src={Dot_25}
      />
      <motion.img
        className='dot dot_23'
        animate={{ scale: 1.3, rotate: -180 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          repeatType: 'reverse',
        }}
        src={Dot_23}
      />

      <motion.img
        className='dot dot_19'
        animate={{ scale: 1.3 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        src={Dot_19}
      />
      <motion.img
        className='dot dot_17'
        animate={{ scale: 1.3 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        src={Dot_17}
      ></motion.img>

      <motion.img
        className='dot dot_14'
        animate={{ scale: 1.3, rotate: 180 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        src={Dot_14}
      ></motion.img>

      <motion.img
        className='dot dot_11'
        animate={{ scale: 5 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        src={Dot_11}
      ></motion.img>

      <motion.img
        className='dot dot_08'
        animate={{ scale: 1.3, rotate: -360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        src={Dot_08}
      ></motion.img>
    </div>
  );
};

export default Home;
