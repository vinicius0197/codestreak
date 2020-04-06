import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  z-index: 10;
  padding-top: 5.5rem;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
`;

const ModalContainer = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 35%;
`;

const Modal = props => {
  return ReactDOM.createPortal(
    <ModalBackground data-testid="modal">
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        { props.children }
      </ModalContainer>
    </ModalBackground>,
    document.querySelector('#modal')
  );
}

export default Modal;