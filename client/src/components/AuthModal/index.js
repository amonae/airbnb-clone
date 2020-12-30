import React, { useState } from 'react';
// import { LoginBox } from '../login';
import Button from 'react-bootstrap/Button';
import Modal1 from './Modal1';

export default function AuthModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal1 show={show} handleClose={handleClose} />
    </>
  );
}
