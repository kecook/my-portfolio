import React from 'react';
import './ProjectThumbNail.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { homePath } from '../../constants/constants';

const ProjectThumbNail = ({ singleProject }) => {
  const {
    title,
    description,
    text,
    photos,
    key,
    website,
    repository,
  } = singleProject;
  // console.log(singleProject, 'here');

  return (
    <div className='projectThumbNail'>
      <h3 className='titleThumbNail'>{title}</h3>
      <h4 className='titleThumbNail'>{description}</h4>

      {photos.map((singlePhoto, index) => {
        // console.log(singlePhoto, 'photo');
        console.log(index, 'index');
        console.log(website, 'website');

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

      <div className='iconsBottom'>
        {/* <Route
          path='shoppies-website'
          component={() => {
            window.location.href = website;
            return null;
          }}
        >
          <p>website</p>
        </Route> */}

        <a
          href='www.speak-memory-github-finder.netlify.app/'
          className='webSite'
        >
          Website
        </a>

        <a href={repository} className='ghIcon'>
          {/* <Link to={repository} className='link'> */}
          <GitHubIcon color='primary' />
          {/* </Link> */}
        </a>
      </div>
      <a href={homePath} className='linkHomeBottom'>
        Home
      </a>
    </div>
  );
};
export default ProjectThumbNail;
