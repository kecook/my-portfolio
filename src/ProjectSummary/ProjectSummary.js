import React from 'react';
import Shoppies from '../assets/Shoppies.png';
import projectSummaryData from '../comps/data/data';

const ProjectSummary = () => {
  const singleProject = projectSummaryData[1];

  return (
    <div className='aboutMe'>
      <h2>{singleProject.title}</h2>
      <h3>{singleProject.description}</h3>
      <p>{singleProject.text} </p>
      <img src={singleProject.photo} className='photo' />
    </div>
  );
};

export default ProjectSummary;
