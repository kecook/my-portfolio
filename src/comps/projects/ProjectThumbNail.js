import React from 'react';

const ProjectThumbNail = ({ projectData }) => {
  const { title, description, text, photos } = projectData;
  console.log(projectData, 'here');
  return (
    <div>
      <h3>{title}</h3>
      <h4>{description}</h4>

      <img src={photos} />
      <p>{text}</p>
    </div>
  );
};
export default ProjectThumbNail;
