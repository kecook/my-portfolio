import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import Dot_23 from '../../assets/Dot_023.png';
import DisplayMultiPhotos from '../displayPhoto/DisplayMultiPhotos';

const Home = () => {
  const fadeRight = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='homeWrapper'>
      <div className='homeGrid'>
        <div className='HeroText'>
          <h1 className='heroTitle'>
            Hello, my name is Kate. I'm a React developer.
          </h1>
        </div>
        <div className='heroImg'>
          <motion.img
            className='dot dot_23'
            variants={fadeRight}
            initial='hidden'
            animate='visible'
            transition={{ duration: 2 }}
            drag={true}
            dragConstraints={{ left: -10, right: 250, top: 175, bottom: 275 }}
            whileHover={{ scale: 1.1, rotate: -180 }}
            src={Dot_23}
          />
        </div>
      </div>
      <DisplayMultiPhotos />
    </div>
  );
};

export default Home;
