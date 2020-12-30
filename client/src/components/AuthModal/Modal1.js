import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { AuthModal as Modal, ModalTitle } from './AuthModalElements';
import LoginPage from '../Login/index.js';

export default function Modal1(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      onHide={props.handleClose}
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <LoginPage handleClose={props.handleClose} />
      </Modal.Body>
      <Modal.Footer />
    </Modal>
  );
}
