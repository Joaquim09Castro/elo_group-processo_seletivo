const formValidation = ( usernameCheck , emailCheck , passwordCheck , passwordConfirmationCheck ) => {
  return ( usernameCheck && emailCheck && passwordCheck && passwordConfirmationCheck ) ? 
    true : false;
}

export default formValidation