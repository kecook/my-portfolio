import React from 'react';
import ProjectSummary from '../ProjectSummary/ProjectSummary';
import data from '../comps/data/data';

const ProjectSummaryMap = () => {
  let singleProject = data;
  return (
    <div className='aboutMe'>
      {singleProject.map((singleProject) => (
        <ProjectSummary singleProject={singleProject} key={singleProject.id} />
      ))}
    </div>
  );
};

export default ProjectSummaryMap;
