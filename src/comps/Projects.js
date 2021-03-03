import React from 'react';
import Shoppies from '../assets/Shoppies.png';
import ShoppiesSearch from '../assets/ShoppiesSearch.png';
import ShoppiesBanner from '../assets/ShoppiesBanner.png';
import GitHubProfile from '../assets/GitHubProfile.png';
import GithubSearch from '../assets/GithubSearch.png';
import { motion } from 'framer-motion';
import './Projects.css';
import GitHubIcon from '@material-ui/icons/GitHub';

const Projects = () => {
  return (
    <div className='projectsWrapper'>
      <div className='shoppies'>
        <div className='title'>
          <span>
            <h3>Shoppies</h3>
          </span>

          <h4>Designer|Developer 2020</h4>
        </div>

        <img src={ShoppiesSearch} className='photo photoOne'></img>
        <p className='description'>
          Shoppies is a movie search website. It uses the Open Movie Database
          api to search for movies titles that match the users parameters.
        </p>
        <img src={Shoppies} className='photo photoTwo'></img>
        <p className='description'>
          The user is able to select their favourite movies for nomination.
          Users are able to update the nomination list as many times as they
          like, but the list can contain a maximum of five movies.
        </p>
        <img src={ShoppiesBanner} className='photo photoThree'></img>
        <p className='description'>
          Users are able to update the nomination list as many times as they
          like, but the list can contain a maximum of five movies. This project
          was created to the specifications of a Shopify application.
        </p>
        <p className='gitHubLink'>
          Visit the Shoppies repo on GitHub
          <a href='https://github.com/kecook/Shoppies' className='githubIcon'>
            <GitHubIcon color='primary' />
          </a>
        </p>
      </div>

      <div className='githubFinder'>
        <div className='title'>
          <span>
            <h3>GitHub Finder</h3>
          </span>
          <h4>Designer|Developer 2020</h4>
        </div>
        <img src={GithubSearch} className='photo photoFour'></img>
        <p className='description'>
          GitHub Finder is a web application to search the users of GitHub. It
          utilizes the GitHub api and returns a list of GitHub users that match
          the search criteria.
        </p>
        <img src={GitHubProfile} className='photo photoFive'></img>
        <p className='description'>
          When the user selects a specific GitHub account they get the detail of
          the account like user avatar, location, and number of public repos.
        </p>
        <p className='gitHubLink'>
          Visit the Github Finder repo on GitHub
          <a
            href='https://github.com/kecook/search_github'
            className='githubIcon'
          >
            <GitHubIcon color='primary' />
          </a>
        </p>
      </div>
    </div>
  );
};
export default Projects;
