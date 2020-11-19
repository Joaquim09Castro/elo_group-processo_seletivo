import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";

import emailValidation from "../../Services/emailValidation";

import {
  registerButtonContainer,
  registerButton
} from "./RegisterForm.module.css";

const RegisterForm = () => {
  const [ emailCheck , setEmailCheck ] = React.useState(Boolean);


  const handleOnKeyUpEvent = ( event )  => {
    setEmailCheck( emailValidation( event.target.value ) );
  }

  return (
    <Form id="registerForm">
      <Form.Group controlId="Email">
        <Form.Label>Email address</Form.Label>

        <Form.Control
          type="email"
          placeholder="Enter email"
          onKeyUp={ handleOnKeyUpEvent }
        />
        
      </Form.Group>

      <Form.Group controlId="Password">
        <Form.Label>Password</Form.Label>

        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="PasswordConfimation">
        <Form.Label>Confirm Password</Form.Label>

        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group controlId="registerButton" className={registerButtonContainer}>
        <Button
          form="registerForm"
          className={registerButton}
          variant="primary"
          type="submit"
        >
          Register
        </Button>
      </Form.Group>
    </Form>
  )
}

export default RegisterForm
