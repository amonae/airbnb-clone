import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';

export const AuthModal = styled(Modal)`
  .modal-header {
    border: none;
  }

  .modal-dialog {
    width: 28vw;
  }

  .modal-content {
    border-radius: 0.7rem;
  }

  .modal-body {
    padding: 1rem 4rem 5rem;
  }

  .modal-footer {
    border-top: none;
  }
`;

export const ModalTitle = styled(Modal.Title)`
  width: 100%;
  text-align: center;
`;
