import React from 'react';
import './About.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const About = () => {
  return (
    <div className='aboutMe'>
      <h3 className='title'>About Me</h3>
      <p className='descriptionAbout'>
        <strong>Hi, my name is Kate</strong> and I’m a web developer with a
        passion for creating. I’ve always loved making things. It first started
        with sewing, then needle point, then knitting.{' '}
      </p>
      <p className='descriptionAbout'>
        Five years ago I decided to take on a new challenge, apply my passion
        for creating to subjects that were completely foreign to me. I went back
        to high school to relearn math, a subject that I used to think I would
        never enjoy. While I was in adult high school someone suggested that I
        give web development a try.
      </p>

      <p className='descriptionAbout'>
        I’d never thought much about web dev. I didn’t know how websites were
        made, or for that matter, how the Internet worked. The last time I’d
        done anything close to computer programming it was very very dry. But, I
        thought math sucked and was wrong about that, so why not try coding. I
        took some intro to programming classes at Juno College, then took a web
        dev bootcamp at BrainStation and have been practicing my JavaScript
        skills ever since. Coding is like crafting but digital, it utilizes the
        same type of problem solving. For now, my focus is frontend development
        using the React library but I’m always open to learning new languages.
      </p>
      <p className='descriptionAbout'>
        Prior to development I studied English Literature in university, managed
        a craft store, and worked with autistic teens. Besides crafting and
        coding I like to garden and spend time with my family. I can be reached
        through LinkedIn and Github.
        <GitHubIcon color='primary' />
        <LinkedInIcon color='primary' />
      </p>
    </div>
  );
};

export default About;
