import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";

import formValidation from "../../Services/formValidation";
import usernameValidation from "../../Services/usernameValidation"
import emailValidation from "../../Services/emailValidation"
import { passwordValidation , passwordConfirmationValidation } from "../../Services/passwordValidation"

import {
  formContainer,
  registerButtonContainer,
  registerButton
} from "./RegisterForm.module.css";

const RegisterForm = ( { className , ...props } ) => {
  const [ validated , setValidated ] = React.useState(false);

  const [ usernameCheck , setUsernameCheck ] = React.useState( false );
  const [ emailCheck , setEmailCheck ] = React.useState( false );
  const [ passwordCheck , setPasswordCheck ] = React.useState( false );
  const [ passwordConfirmationCheck , setPasswordConfirmationCheck ] = React.useState( false );
  
  const [ password , setPassword ] = React.useState( String );
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if( formValidation( usernameCheck , emailCheck , passwordCheck , passwordConfirmationCheck ) ) {
      window.location.replace('/pannel')
    }
    setValidated( true );
  };

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
    <Form
      noValidate
      id="registerForm"
      className={`${formContainer} ${className}`} 
      onSubmit={handleSubmit}
    >
      <Form.Group controlId="username">
        <Form.Label><b>Username*</b></Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Username"
          onKeyUp={ handleUsernameOnKeyUp }
          isValid={ usernameCheck }
          isInvalid={ !usernameCheck && validated }
        />
        <Form.Control.Feedback type="invalid">
          Invalid username
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label><b>Email*</b></Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="example@email.dom"
          onKeyUp={ handleEmailOnKeyUp }
          isValid={ emailCheck }
          isInvalid={ !emailCheck && validated }
        />
        <Form.Control.Feedback type="invalid">
          Invalid email
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label><b>Password*</b></Form.Label>
        <Form.Text muted="true">
          The password must have:
          <br />
          - 8 characters or more
          <br />
          - at least one number
          <br />
          - at least one special character
        </Form.Text>
        <Form.Control
          required
          type="password"
          placeholder="Password"
          onKeyUp={ handlePasswordOnKeyUp }
          isValid={ passwordCheck }
          isInvalid={ !passwordCheck && validated }
        />
        <Form.Control.Feedback type="invalid">
          Invalid password
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group
        controlId="passwordConfimation"
      >
        <Form.Label><b>Confirm Password*</b></Form.Label>
        <Form.Control
          required
          type="password"
          placeholder="Password"
          onKeyUp={ handlePasswordConfirmationOnKeyUp }
          isValid={ passwordCheck && passwordConfirmationCheck }
          isInvalid={ !passwordConfirmationCheck && validated }
        />
        <Form.Control.Feedback type="invalid">
          {
            passwordConfirmationCheck ?
              "" : "Passwords don't match"
          }
        </Form.Control.Feedback>
      </Form.Group>

      <div className={registerButtonContainer}>
        <Button
          type="submit"
          className={registerButton}
          variant="primary"
        >
          Register
        </Button>
      </div>
    </Form>
  )
}

export default RegisterForm
