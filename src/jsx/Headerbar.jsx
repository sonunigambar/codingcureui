import React from 'react'
import logo from '../img/logo.png'

const Headerbar = () => {
  return (
    <header>
        <img src={logo} alt="My Logo" class="logo" />
        <h1 class="header-title">Coding Cure</h1>
  </header>
  )
}

export default Headerbar