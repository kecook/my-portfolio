import React, { useState } from 'react';
import Modal from './layout/Modal';
import Button from './layout/Button';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button
        text='Contact me'
        onClick={() => setShow(true)}
        buttonStyle={'btn--scuba--solid'}
        buttonSize={'btn--medium'}
      />
      <Modal onClose={() => setShow(false)} show={show} title="Let's connect" />
    </div>
  );
};

export default ContactPage;
