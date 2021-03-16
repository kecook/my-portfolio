import React from 'react';
import { Link } from 'react-router-dom';
const DisplayPhoto = ({ photoData }) => {
  const { title, photos, link } = photoData;
  const mainPhoto = photos.find((photoObject) => photoObject.main === true);

  console.log(photoData, 'here');
  return (
    <div>
      <div className='projectOne'>
        <Link to={link} className='link'>
          <h3 className='z'>{title}</h3>
          <div className='z'>
            <img className='projectOnePhoto' src={mainPhoto.photo}></img>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default DisplayPhoto;
