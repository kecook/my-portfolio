import React from 'react';
import ShoppiesWeb from '../../assets/Shoppies.png';
import ShoppiesSearch from '../../assets/ShoppiesSearch.png';
import ShoppiesBanner from '../../assets/ShoppiesBanner.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Shoppies.css';

const Shoppies = () => {
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
          API to search for movie titles that match the users parameters.
        </p>
        <img src={ShoppiesWeb} className='photo photoTwo'></img>
        <p className='description'>
          The user is able to select their favourite movies for nomination.
          Users are able to update the nomination list as many times as they
          like, but the list can contain a maximum of five movies.
        </p>
        <img src={ShoppiesBanner} className='photo photoThree'></img>
        <p className='description'>
          This project was created to the specifications of a Shopify
          application.
        </p>
        <p className='gitHubLink'>
          Visit the Shoppies{' '}
          <a
            href='https://my-shoppies.netlify.app'
            className='githubFinderWebSite'
          >
            website{' '}
          </a>
          or repo on GitHub.
          <a href='https://github.com/kecook/Shoppies' className='githubIcon'>
            <GitHubIcon color='primary' />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Shoppies;
