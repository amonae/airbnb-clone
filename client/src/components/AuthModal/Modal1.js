import React, { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { AuthModal as Modal, ModalTitle } from './AuthModalElements';

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
      <Modal.Header closeButton>
        <ModalTitle id="contained-modal-title-vcenter">
          Modal heading
        </ModalTitle>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
