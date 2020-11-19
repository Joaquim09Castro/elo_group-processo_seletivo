import React from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav';

import {
  modalFooter,
  footerButton,
  footerNav
} from './LogInModal.module.css'

const LogInModal = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Log In
      </Button>

      <Modal
        {...props}
        show={show}
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>

        </Modal.Body>
        
        <Modal.Footer className={modalFooter}>
          <Button
            className={footerButton}
            variant="primary"
            onClick={handleClose}
          >
            Log In
          </Button>
          <Nav className={footerNav}>
            Don't have an account?
            <Nav.Link href="/sign-in">Sign in</Nav.Link> 
          </Nav>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogInModal
