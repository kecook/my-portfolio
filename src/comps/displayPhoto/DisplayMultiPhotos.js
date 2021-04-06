import React from 'react';
import projectData from '../../data/data';
import DisplayPhoto from './DisplayPhoto';
import '../home/Home.css';

const DisplayMultiPhotos = () => {
  return (
    <div className='z'>
      {/* if (photoData.main === true : */}
      {/* taking the info from data js that's called projectData and taking each individual object and assigning it the name */}
      {projectData.map((singleProject) => (
        <DisplayPhoto key={singleProject.id} photoData={singleProject} />
      ))}
    </div>
  );
};

export default DisplayMultiPhotos;
