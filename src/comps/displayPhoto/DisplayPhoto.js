import React from 'react';
import { Link } from 'react-router-dom';
const DisplayPhoto = ({ photoData }) => {
  const { title, photo } = photoData;
  console.log(photoData, 'here');
  return (
    <div className='photoSection'>
      <div className='projectOne'>
        {/* if (photoData.main === true) */}
        <Link to='/shoppies' className='link'>
          <h3 className='projectOneTitle'>{title}</h3>
          <div className='photoWrapper'>
            <img className='projectOnePhoto' src={photo}></img>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default DisplayPhoto;
