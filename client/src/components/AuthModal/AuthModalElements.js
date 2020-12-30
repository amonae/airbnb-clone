import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';

export const AuthModal = styled(Modal)`
  .modal-dialog {
    width: 35vw;
  }

  .modal-content {
    border-radius: 0.7rem;
  }

  .modal-footer {
    border-top: none;
  }
`;

export const ModalTitle = styled(Modal.Title)`
  width: 100%;
  text-align: center;
`;
