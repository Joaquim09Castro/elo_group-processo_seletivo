import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'

import LogInModal from "../LogInModal/LogInModal";

import {
  navbar,
  logo
} from './Header.module.css';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" className={navbar}>
        <Navbar.Brand className={logo} >
          <Image src="https://elogroup.com.br/wp-content/uploads/2020/09/logo-EloGroup-branco.png" fluid/>
        </Navbar.Brand>

        <LogInModal/>
      </Navbar>
    </header>
  )
}

export default Header
