import React from 'react';
import data from '../../data/data';

import './GitHubFinder.css';

import ProjectThumbNail from '../projects/ProjectThumbNail';

const GitHubFinder = () => {
  return (
    <div className='githubFinder'>
      <ProjectThumbNail singleProject={data[1]} />
    </div>
  );
};

export default GitHubFinder;
