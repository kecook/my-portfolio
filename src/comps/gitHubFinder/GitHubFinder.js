import React from 'react';
import GitHubProfile from '../../assets/GitHubProfile.png';
import GithubSearch from '../../assets/GithubSearch.png';
import './GitHubFinder.css';
import GitHubIcon from '@material-ui/icons/GitHub';

const GitHubFinder = () => {
  return (
    <div className='githubFinder'>
      <div className='title'>
        <span>
          <h3>GitHub Finder</h3>
        </span>
        <h4>Designer|Developer 2020</h4>
      </div>
      <img src={GithubSearch} className='photo photoFour'></img>
      <p className='description'>
        GitHub Finder is a web application for searching the users of GitHub. It
        utilizes the GitHub API and returns a list of GitHub users that match
        the search criteria.
      </p>
      <img src={GitHubProfile} className='photo photoFive'></img>
      <p className='description'>
        When the user selects a specific GitHub account they get the details of
        the account like user avatar, location, and number of public repos.
      </p>
      <p className='gitHubLink'>
        Visit the Github Finder{' '}
        <a
          href='https://speak-memory-github-finder.netlify.app'
          className='githubFinderWebSite'
        >
          website{' '}
        </a>
        or repo on GitHub
        <a
          href='https://github.com/kecook/search_github'
          className='githubIcon'
        >
          <GitHubIcon color='primary' />
        </a>
      </p>
    </div>
  );
};

export default GitHubFinder;
