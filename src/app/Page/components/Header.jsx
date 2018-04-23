import React from 'react'

import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <nav>
          <ul className='navigation'>
            <li><a href='http://quackui.org/'><h1 className='brand'>QuackUI.org</h1></a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
