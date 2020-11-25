import React from 'react'

import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

import AddLeadsForm from './AddLeadsForm/AddLeadsForm'

const AddLeadsModal = ({ ...props }) => {
  const [modalShow, setModalShow] = React.useState(false);

  const handleAddButtonOnClick = () => {
    setModalShow(true);
  }

  const handleModalHide = () => {
    setModalShow(false);
  }

  return (
    <>
      <Button
        onClick={handleAddButtonOnClick}
      >
        {"Add Leads (+)"}
      </Button>
      <Modal
        {...props}
        show={modalShow}
        onHide={handleModalHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddLeadsForm hidemodal={handleModalHide} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddLeadsModal
