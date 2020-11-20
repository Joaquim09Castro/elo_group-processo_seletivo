import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";

import usernameValidation from "../../Services/usernameValidation"
import emailValidation from "../../Services/emailValidation"
import { passwordValidation , passwordConfirmationValidation } from "../../Services/passwordValidation"

import {
  formContainer,
  registerButtonContainer,
  registerButton
} from "./RegisterForm.module.css";

const RegisterForm = ( { className , ...props } ) => {
  const [ usernameCheck , setUsernameCheck ] = React.useState( Boolean );
  const [ emailCheck , setEmailCheck ] = React.useState( Boolean );
  const [ passwordCheck , setPasswordCheck ] = React.useState( Boolean );
  const [ passwordConfirmationCheck , setPasswordConfirmationCheck ] = React.useState( Boolean );
  
  const [ password , setPassword ] = React.useState( String );

  const handleUsernameOnKeyUp = ( event ) => {
    setUsernameCheck( usernameValidation( event.target.value ) );
  }

  const handleEmailOnKeyUp = ( event )  => {
    setEmailCheck( emailValidation( event.target.value ) );
  }

  const handlePasswordOnKeyUp = ( event ) => {
    setPassword( event.target.value );
    setPasswordCheck( passwordValidation( password ) );
  }

  const handlePasswordConfirmationOnKeyUp = ( event ) => {
    setPasswordConfirmationCheck( passwordConfirmationValidation( password , event.target.value ) );
  }

  return (
    <Form id="registerForm" className={`${formContainer} ${className}`}>

      <Form.Group controlId="username">
        <Form.Label>Username*</Form.Label>
        
        <Form.Text></Form.Text>

        <Form.Control
          type="text"
          placeholder="Enter username"
          onKeyUp={ handleUsernameOnKeyUp }
        />

      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email*</Form.Label>

        <Form.Control
          type="email"
          placeholder="Enter email"
          onKeyUp={ handleEmailOnKeyUp }
        />
        
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password*</Form.Label>

        <Form.Control
          type="password"
          placeholder="Password"
          onKeyUp={ handlePasswordOnKeyUp }
        />

      </Form.Group>
      <Form.Group controlId="passwordConfimation">
        <Form.Label>Confirm Password*</Form.Label>

        <Form.Control
          type="password"
          placeholder="Password"
          onKeyUp={ handlePasswordConfirmationOnKeyUp }
        />

      </Form.Group>

      <Form.Group controlId="registerButton" className={registerButtonContainer}>
        <Button
          form="registerForm"
          className={registerButton}
          variant="primary"
          href={ usernameCheck && emailCheck && passwordCheck && passwordConfirmationCheck && "/pannel" }
        >
          Register
        </Button>
      </Form.Group>
    </Form>
  )
}

export default RegisterForm
