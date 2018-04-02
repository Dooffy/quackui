import React from 'react'

import './Links.css'

const Links = ({colors}) => {
  return (
    <div className='preview-block'>
      <h3>Link Examples</h3>

      <div className='example'>
        {
          colors.map((data, key) => {
            return (
              <div className='links-set' key={key}>
                <a style={{color: data.color}} href='#'>Decorated</a> {' '}
                <a style={{color: data.color, textDecoration: 'none'}} href='#'>Non-Decorated</a> {' '}
                <a style={{color: data.color, textDecoration: 'none'}} href='#' disabled>Disabled</a>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Links
