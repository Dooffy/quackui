import React from 'react'

import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <nav>
          <ul className='navigation' >
            <li><h1 className='brand'>QuackUI.org</h1></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
