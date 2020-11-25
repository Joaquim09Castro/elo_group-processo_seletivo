const formValidation = (usernameCheck, passwordCheck, passwordConfirmationCheck) => {
  return (usernameCheck && passwordCheck && passwordConfirmationCheck) ?
    true : false;
}

export default formValidation