import React from 'react'

import Main from '../Main/Main'
import RegisterForm from '../RegisterForm/RegisterForm'
import Title from '../Title/Title'

import { form } from "./Register.module.css";

const Register = () => {
  return (
    <Main>
      <Title>Register</Title>
      <RegisterForm className={ form }/>
    </Main>
  )
}

export default Register
