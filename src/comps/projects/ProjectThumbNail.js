import React from 'react';
import './ProjectThumbNail.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import { homePath } from '../../constants/constants';

const ProjectThumbNail = ({ singleProject }) => {
  const {
    id,
    title,
    description,
    text,
    photos,
    index,
    website,
    repository,
  } = singleProject;
  console.log('here', singleProject);
  return (
    <div className='projectThumbNail'>
      <h3 className='titleThumbNail'>{title}</h3>
      <h4 className='titleThumbNail'>{description}</h4>

      {photos.map((singlePhoto, index) => {
        return (
          <div key={`div-${index}`}>
            <img
              src={singlePhoto.photo}
              key={index}
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

      <div className='iconsBottom'>
        <div className='justIcons'>
          <a href={website} className='webSite'>
            Website
          </a>

          <a href={repository} className='ghIcon'>
            <GitHubIcon color='primary' />
          </a>
        </div>
        <a href={homePath} className='linkHomeBottom'>
          Home
        </a>
      </div>
    </div>
  );
};
export default ProjectThumbNail;
