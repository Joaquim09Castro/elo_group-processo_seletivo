const passwordValidation = ( string ) => {
  if ( string.length >= 8 && string.match( /\W/ ) && string.match( /\d/ ) && string.match( /\w/ )) {
    return true;
  }

  return false;
}

const passwordConfirmationValidation = ( password , passwordConfirmation ) => {
  return password === passwordConfirmation;
}

module.exports = { passwordValidation , passwordConfirmationValidation };