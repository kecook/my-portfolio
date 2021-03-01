import React from 'react';
import Lithop_020 from '../assets/Lithop_020.png';
import Lithop_011 from '../assets/Lithop_011.png';
import './Projects.css';

const Projects = () => {
  return (
    <div>
      <div>
        <h3>Shoppies</h3>
        <h4>Designer|Developer 2020</h4>
        <img src={Lithop_020} className='photoOne'></img>
        <h3>The challenge </h3>
        <p>To create a website that .....</p>
        <img src={Lithop_011} className='photoTwo'></img>
      </div>
    </div>
  );
};

export default Projects;
