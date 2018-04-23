import React from 'react'

import './Nav.css'

const Nav = ({color, border}) => {
  return (
    <nav className={`nav${border ? ' rounded' : ''}`} style={{backgroundColor: color}}>
      <a href='#' className='logo'>Brand</a>
      <ul>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact Us</a></li>
      </ul>
    </nav>
  )
}

export default Nav
