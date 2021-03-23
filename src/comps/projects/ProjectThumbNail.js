import React from 'react';
import './ProjectThumbNail.css';

const ProjectThumbNail = ({ singleProject }) => {
  const { title, description, text, photos, key } = singleProject;
  // console.log(singleProject, 'here');

  return (
    <div className='projectThumbNail'>
      <h3 className='titleThumbNail'>{title}</h3>
      <h4 className='titleThumbNail'>{description}</h4>

      {photos.map((singlePhoto, index) => {
        // console.log(singlePhoto, 'photo');
        console.log(index, 'index');
        return (
          <div>
            <img
              src={singlePhoto.photo}
              key={singlePhoto.id}
              className='photoThumbNail'
            />

            {text[index] && (
              <p className='descriptionThumbNail '>
                {text[index]} {text.index}
              </p>
            )}

            {/* if the current index exists in the text array then show the text array */}
          </div>
        );
      })}
    </div>
  );
};
export default ProjectThumbNail;
