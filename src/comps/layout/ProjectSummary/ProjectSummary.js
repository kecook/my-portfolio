import React from 'react';
import Shoppies from '../../../assets/Shoppies.png';
import projectSummaryData from '../../data/projectSummaryData';

const ProjectSummary = () => {
  console.log(projectSummaryData, 'here');
  const singleProject = projectSummaryData[0];

  return (
    <div className='aboutMe'>
      <h2 className='title'>{singleProject.title}</h2>
      <p className='description'>{singleProject.text} </p>
      <img src={singleProject.photo} className='photo' />
    </div>
  );
};

export default ProjectSummary;
