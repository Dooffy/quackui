import React from 'react'

import './Nav.css'

const Nav = ({color, border}) => {
  return (
    <nav className={`nav${border ? ' rounded' : ''}`} style={{backgroundColor: color}}>
      <a href='#' className='logo'>Q</a>
      <ul>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact Us</a></li>
        <li><a href='#'>Account</a></li>
      </ul>
    </nav>
  )
}

export default Nav
