import GitHubProfile from '../assets/GitHubProfile.png';
import GithubSearch from '../assets/GithubSearch.png';
import Shoppies from '../assets/Shoppies.png';
import ShoppiesBanner from '../assets/ShoppiesBanner.png';
import ShoppiesSearch from '../assets/ShoppiesSearch.png';
import { shoppiesPath, githubPath } from '../constants/constants';

const projectData = [
  {
    id: '1',
    title: 'Shoppies',
    description: 'Designer|Developer 2020',
    text: [
      'Shoppies is a movie search website.',
      'It uses the Open Movie Database API to search for movie titles that match the users parameters. The user is able to select their favourite movies for nomination.',
      'This project was created to the specifications of a Shopify application.Visit the Shoppies repo on GitHut',
    ],
    photos: [
      { main: true, photo: Shoppies },
      {
        main: false,
        photo: ShoppiesBanner,
      },
      {
        main: false,
        photo: ShoppiesSearch,
      },
    ],
    link: shoppiesPath,
  },

  {
    id: '2',
    title: 'GitHub Finder',
    description: 'Designer|Developer 2020',
    text: [
      'GitHub Finder is a web application for searching  the users of GitHub. It utilizes the GitHub API and returns a list of GitHub users that match the search criteria.',
      'When the user selects a specific GitHub account they get the details of the account like user avatar, location, and number of public repos. Visit the Github Finder repo on GitHub',
    ],
    photos: [
      {
        main: true,
        photo: GitHubProfile,
      },
      {
        main: false,
        photo: GithubSearch,
      },
    ],
    link: githubPath,
  },
];

export default projectData;
