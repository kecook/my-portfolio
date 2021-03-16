import React from 'react';
import projectData from '../../data/data';
import ProjectThumbNail from './ProjectThumbNail';

const MultiProjectPar = () => {
  return (
    <div>
      {projectData.map((singleProjectInfo) => (
        <ProjectThumbNail
          key={singleProjectInfo.id}
          projectData={singleProjectInfo}
        />
      ))}
    </div>
  );
};

export default MultiProjectPar;
