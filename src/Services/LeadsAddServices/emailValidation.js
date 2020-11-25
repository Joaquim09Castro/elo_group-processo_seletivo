import isEmail from 'sane-email-validation'

const formEmailHandler = ( string ) => {
  return isEmail( string );
}

export default formEmailHandler