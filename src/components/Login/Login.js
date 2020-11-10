import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import LoginCarousel from '../Carousel/Carousel';
import LoginButton from '../buttons/Button'
import './Login.css';
const Login = ({className, modal, toggle}) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} charCode="X" className='modalbtn'></ModalHeader>
        <ModalBody>
          <LoginCarousel />
           <LoginButton   />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Login;