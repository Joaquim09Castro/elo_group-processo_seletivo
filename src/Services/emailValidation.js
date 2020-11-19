import isEmail from 'sane-email-validation'

const emailValidation = ( string ) => {
  return isEmail( string );
}

export default emailValidation