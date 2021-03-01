import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Menu from './Menu';
import MenuIcon from '@material-ui/icons/Menu';
import { motion } from 'framer-motion';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Navbar = () => {
  const [menu, setMenu] = useState(null);

  return (
    <nav className='navbar'>
      <div className='navbar-wrapper'>
        {/* <motion.div className='menuWrapper' whileHover={{ scale: 1.2 }}>
          <MenuIcon onClick={() => setMenu(true)} />
          <Menu onClose={() => setMenu(false)} menu={menu} />
        </motion.div> */}

        <motion.h2
          className='banner'
          whileHover={{ scale: 1.3, color: '#db4372' }}
        >
          <Link to='/' className='linkHome'>
            Speak Memory
          </Link>
        </motion.h2>

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
        <div className='icons'>
          <motion.a
            href='https://github.com/kecook'
            whileHover={{ scale: 1.1 }}
            className='githubIcon'
          >
            <GitHubIcon color='primary' />
          </motion.a>

          <motion.a
            href='https://linkedin.com/in/katelin-cook'
            whileHover={{ scale: 1.1 }}
            className='linkedinIcon'
          >
            <LinkedInIcon color='primary' />
          </motion.a>
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
