import React from 'react';
import { Link } from 'react-router-dom';
import './DisplayPhoto.css';
const DisplayPhoto = ({ photoData }) => {
  const { title, photos, link, id } = photoData;
  const mainPhoto = photos.find((photoObject) => photoObject.main === true);

  console.log(photoData, 'here');
  return (
    <div className='project'>
      <div className='projectWrapper'>
        <Link to={link} className='link'>
          <h3 className='title'>{title}</h3>

          <img
            className='projectPhoto'
            src={mainPhoto.photo}
            key={photoData.id}
          ></img>
        </Link>
      </div>
    </div>
  );
};
export default DisplayPhoto;
