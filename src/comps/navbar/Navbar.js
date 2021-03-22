import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // const { menu, setMenu } = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <nav className='navbar'>
      <div className='navbar-wrapper'>
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
