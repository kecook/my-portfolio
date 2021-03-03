import React from 'react';
// import Shoppies from '../assets/Shoppies.png';
// import ShoppiesSearch from '../assets/ShoppiesSearch.png';
// import ShoppiesBanner from '../assets/ShoppiesBanner.png';
// import GitHubProfile from '../assets/GitHubProfile.png';
// import GithubSearch from '../assets/GithubSearch.png';
import useProjects from './hooks/useProjects';

import './Projects.css';
import { GitHub } from '@material-ui/icons';

const Projects2 = () => {
  const { apps } = useProjects;
  console.log(apps);
  //   state = {
  //     project: [
  //       {
  //         title: 'Shoppies',
  //         subText: 'December 2020',
  //         about:
  //           'Shoppies is a movie search website. It uses the Open Movie Database api to search for movies titles that match the users parameters. The user is able to select their favourite movies for nomination. Users are able to update the nomination list as many times as they like, but the list can contain a maximum of five movies. This project was created to the specifications of a Shopify application. ',
  //       },
  //       {
  //         title: 'GitHub Finder',
  //         subText: 'August 2020',
  //         about:
  //           'GitHub Finder is a web application to search the users of GitHub. It utilizes the GitHub api and returns a list of GitHub users that match the search criteria. When the user selects a specific GitHub account they get the detail of the account like user avatar, location, and number of public repos.',
  //       },
  //     ],
  //   };

  return (
    <div className='projectsWrapper'>
      <div className='shoppies'>
        <span>
          <h3 className='projectTitleShop'>Shoppies</h3>
        </span>
      </div>
    </div>
  );
};
export default Projects2;
