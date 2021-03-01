import React from 'react';
import './AboutMe.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='about'>
      <div className='textSection'>
        <h3>About Me</h3>
        <p>
          <strong>Hi, my name is Kate</strong> and I'm a web developer.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Enim facilisis
          gravida neque convallis. Mi tempus imperdiet nulla malesuada. Non arcu
          risus quis varius quam quisque id diam vel. Blandit cursus risus at
          ultrices mi tempus. Amet luctus venenatis lectus magna fringilla urna
          porttitor rhoncus dolor. Dapibus ultrices in iaculis nunc sed augue.
          Non blandit massa enim nec dui nunc mattis.
        </p>

        <p>
          Morbi tristique senectus et netus et. Faucibus nisl tincidunt eget
          nullam non nisi est. Ornare arcu odio ut sem nulla pharetra diam sit
          amet. Tortor dignissim convallis aenean et tortor at. Eget lorem dolor
          sed viverra. Vitae aliquet neullamcorper sit amet risus nullam. Sit
          amet nisl suscipit adipiscing bibendum est. Vitae congue eu consequat
          ac felis donec et odio pellentesque. Nisl tincidunt eget nullam non
          nisi. Convallis tellus id interdum velit laoreet. Et malesuada fames
          ac turpis egestas integer eget aliquet. Venenatis urna cursus eget
          cilisi nullam vehicula ipsum a. Find me on LinkedIn and GitHub
          <GitHubIcon color='primary' />
          <LinkedInIcon color='primary' />
        </p>
      </div>
    </div>
  );
};

export default About;
