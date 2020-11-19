import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'

import LogInModal from "../LogInModal/LogInModal";

import {
  logo,
  headerContainer
} from './Header.module.css';

const Header = () => {
  return (
      <Navbar bg="dark" variant="dark" className={headerContainer}>
        <Navbar.Brand className={logo} >
          <Image src="https://elogroup.com.br/wp-content/uploads/2020/09/logo-EloGroup-branco.png" fluid/>
        </Navbar.Brand>

      <LogInModal/>
      </Navbar>
  )
}

export default Header
