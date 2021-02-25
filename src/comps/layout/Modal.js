import React from 'react';
import Button from './Button';
import './Modal.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Modal = ({ show, onClose, title }) => {
  if (!show) {
    return null;
  }
  return (
    <div className='modal' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <h4 className='modal-title'>{title}</h4>
        <ul>
          <li className='itemOne'>
            <a href='https://github.com/kecook'>
              <GitHubIcon color='primary' />
            </a>
          </li>
          <li className='itemTwo'>
            <a href='https://linkedin.com/in/katelin-cook'>
              <LinkedInIcon color='primary' />
            </a>
          </li>
        </ul>
        <Button text='close' onClick={onClose} />
      </div>
    </div>
  );
};

export default Modal;
