import React from 'react'

import Nav from 'app/Common/components/Nav'

const Navs = ({colors, border}) => {
  const vibrant = colors.find(color => color.code === 'dark-vibrant')
  const muted = colors.find(color => color.code === 'dark-muted')

  return (
    <div className='preview-block'>
      <h3>Nav Examples</h3>
      <div className='example'>
        <Nav color={vibrant.color} border={false} />
        <Nav color={muted.color} border={false} />
      </div>
    </div>
  )
}

export default Navs
