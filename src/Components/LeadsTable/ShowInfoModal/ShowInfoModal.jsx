import React from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import {
  modalHeader,
  modalBody,
  infoLabel,
  emailPhoneSection,
  oportunitiesSection
} from './ShowInfoModal.module.css'

const ShowInfoModal = ({ values, onHide, ...props }) => {
  const [oportunitiesList, setOportunitiesList] = React.useState(Array);

  const {
    email,
    oportunities,
    phone,
    title
  } = values;

  React.useEffect(() => {
    if (oportunities !== undefined) {
      setOportunitiesList(oportunities);
    }
  }, [oportunities])

  return (
    <Modal
      {...props}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={modalHeader}>
        <h2 >
          {title}
        </h2>
      </Modal.Header>
      <Modal.Body className={modalBody}>
        <h4 className={infoLabel}>Information</h4>
        <section className={emailPhoneSection}>
          <h5>Email</h5>
          <p>{email}</p>
          <h5>Phone</h5>
          <p>{phone}</p>
        </section>
        <section className={oportunitiesSection}>
          <h5>Oportunities</h5>
          {
            oportunitiesList.map((oportunity, idx) => {
              return (
                <p key={idx}>{oportunity}</p>
              );
            })
          }
        </section>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ShowInfoModal
