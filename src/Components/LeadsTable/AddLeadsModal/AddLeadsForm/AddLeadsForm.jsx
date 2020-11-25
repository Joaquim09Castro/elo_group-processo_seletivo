import React from 'react'
import IntlTelInput from 'react-intl-tel-input'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { AllCheckerCheckbox, Checkbox, CheckboxGroup } from '@createnl/grouped-checkboxes'

import nameValidation from "../../../../Services/LeadsAddServices/nameValidation"
import emailValidation from "../../../../Services/LeadsAddServices/emailValidation"
import checkboxAllInteraction from '../../../../Services/LeadsAddServices/checkboxInteraction'

import 'react-intl-tel-input/dist/main.css'
import {
  form,
  textInputs,
  checklist,
  checkboxOptionGroup,
  checkboxLabel,
  submitButton
} from './AddLeadsForm.module.css'

const AddLeadsForm = ({ hidemodal }) => {
  const [validated, setValidated] = React.useState(false);
  const [allChecked, setAllChecked] = React.useState(false);

  const [nameCheck, setNameCheck] = React.useState(false);
  const [phoneCheck, setPhoneCheck] = React.useState(false);
  const [emailCheck, setEmailCheck] = React.useState(false);

  const phoneInputProps = {
    required: "required",
    validity: `${phoneCheck}`
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameCheck && phoneCheck && emailCheck) {
      hidemodal();
    }
    setValidated(true);
  }

  const handleNameChange = (event) => {
    setNameCheck(nameValidation(event.target.value));
  }

  const handlePhoneValidation = (isValid) => {
    setPhoneCheck(isValid);
  }

  const handleEmailChange = (event) => {
    setEmailCheck(emailValidation(event.target.value));
  }

  const handleCheckboxChange = (checkboxes) => {
    setAllChecked(checkboxAllInteraction(checkboxes));
  }

  return (
    <Form
      noValidate
      id="leads-modal-form"
      className={form}
      onSubmit={handleSubmit}
    >
      <div className={textInputs}>
        <Form.Group controlId="lead-name">
          <Form.Label><b>Name*</b></Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            isValid={nameCheck}
            isInvalid={!nameCheck && validated}
            onChange={handleNameChange}
            validity={`${nameCheck}`}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a name
        </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="lead-phone">
          <Form.Label><b>Phone*</b></Form.Label>
          <br />
          <IntlTelInput
            telInputProps={phoneInputProps}
            onPhoneNumberBlur={handlePhoneValidation}
            defaultCountry="br"
            numberType="FIXED_LINE_OR_MOBILE"
            preferredCountries={["br", "us"]}
            format={true}
            fieldId="lead-phone"
            containerClassName="intl-tel-input"
            inputClassName="form-control"
          />
        </Form.Group>
        <Form.Group controlId="lead-email">
          <Form.Label><b>Email*</b></Form.Label>
          <Form.Control
            required
            type="lead-email"
            placeholder="example@email.dom"
            onChange={handleEmailChange}
            isValid={emailCheck}
            isInvalid={!emailCheck && validated}
            validity={`${emailCheck}`}
          />
          <Form.Control.Feedback type="invalid">
            Invalid email
        </Form.Control.Feedback>
        </Form.Group>
      </div>
      <div className={checklist}>
        <CheckboxGroup onChange={handleCheckboxChange}>
          <AllCheckerCheckbox id="checkbox-all" />
          <label htmlFor="checkbox-all" className={checkboxLabel}>
            {
              allChecked ?
                "Uncheck All" : "Check All"
            }
          </label>

          <div className={checkboxOptionGroup}>
            <Checkbox name="RPA" id="checkbox-rpa" />
            <label className={checkboxLabel} htmlFor="checkbox-rpa"> RPA </label>
          </div>

          <div className={checkboxOptionGroup}>
            <Checkbox name="Digital Products" id="checkbox-digital-products" />
            <label className={checkboxLabel} htmlFor="checkbox-digital-products">Digital Products</label>
          </div>

          <div className={checkboxOptionGroup}>
            <Checkbox name="Analytics" id="checkbox-analytics" />
            <label className={checkboxLabel} htmlFor="checkbox-analytics">Analytics</label>
          </div>

          <div className={checkboxOptionGroup}>
            <Checkbox name="BPM" id="checkbox-bpm" />

            <label className={checkboxLabel} htmlFor="checkbox-bpm">BPM</label>
          </div>
        </CheckboxGroup>
        <Button type="submit" form="leads-modal-form" className={submitButton} >Submit</Button>
      </div>
    </Form>
  )
}

export default AddLeadsForm