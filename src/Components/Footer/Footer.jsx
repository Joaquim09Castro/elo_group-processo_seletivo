import React from 'react'

import {
  footerContainer,
  footerText
} from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={footerContainer}>
      <p className={footerText}>
        Made By: <b>Joaquim Castro</b>
      </p>
    </footer>
  )
}

export default Footer
