import React from 'react'

import Button from 'app/Common/components/Button'
import Nav from 'app/Common/components/Nav'
import './Design.css'

const Image = ({image, colors, border, shadow}) => {
  const muted = colors.find(color => color.code === 'muted')
  const vibrant = colors.find(color => color.code === 'vibrant')
  const darkVibrant = colors.find(color => color.code === 'dark-vibrant')

  return (
    <div className='design-set'>
      <Nav color={darkVibrant.color} border={false} />
      <div className='design-preview'>
        <div className='design-area' style={{backgroundImage: `url(${image})`}} />
        <ul className='content-area'>
          <li><h1>Lorem ipsum dolor</h1></li>
          <li><span>Vestibulum id fringilla justo, eu consectetur tortor. Sed egestas lorem suscipit mi rutrum auctor.</span></li>
          <li>
            <Button
              label={'Info Button'}
              size={'xl'}
              color={muted.color}
              border={border}
              shadow={false}
              inner={false} />

            <Button
              label={'Action Button'}
              size={'xl'}
              color={vibrant.color}
              border={border}
              shadow={false}
              inner={false} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Image
