import React from 'react';
import data from '../../data/photoData';
import DisplayPhoto from './DisplayPhoto';
import '../home/Home.css';

const DisplayMultiPhotos = () => {
  let photoData = data;

  return (
    <div className='projectTwo'>
      {/* if (photoData.main === true : */}
      {photoData.map((photoData) => (
        <DisplayPhoto key={photoData.id} photoData={photoData} />
      ))}
    </div>
  );
};

export default DisplayMultiPhotos;
