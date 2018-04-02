import React from 'react'

import './Headers.css'

const Headers = ({colors}) => {
  const headerColor = colors.find(color => color.code === 'dark-vibrant')

  return (
    <div className='preview-block'>
      <h3>Headers Examples</h3>

      <div className='example headers-block'>
        <h1 style={{color: headerColor.color}}>H1 Lorem ipsum dolor</h1>
        <h2 style={{color: headerColor.color}}>H2 Lorem ipsum dolor</h2>
        <h3 style={{color: headerColor.color}}>H3 Lorem ipsum dolor</h3>
        <h4 style={{color: headerColor.color}}>H4 Lorem ipsum dolor</h4>
        <h5 style={{color: headerColor.color}}>H5 Lorem ipsum dolor</h5>
        <h6 style={{color: headerColor.color}}>H6 Lorem ipsum dolor</h6>
      </div>
    </div>
  )
}

export default Headers
