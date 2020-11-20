import React from 'react'

import Image from 'react-bootstrap/Image'

import {
 header,
 logo
} from './Header.module.css';

const Header = () => {
  return (
    <header className={header}>
      <a href="https://elogroup.com.br/">
        <Image src="https://elogroup.com.br/wp-content/uploads/2020/09/logo-EloGroup-branco.png" className={logo} fluid/>
      </a>
    </header>
  )
}

export default Header