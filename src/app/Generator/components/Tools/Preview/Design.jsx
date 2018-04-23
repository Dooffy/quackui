import React from 'react'

import Button from 'app/Common/components/Button'
import Nav from 'app/Common/components/Nav'

import {
  CODE_MUTED,
  CODE_VIBRANT,
  CODE_DARK_VIBRANT,
  getColorByType
} from 'app/Common/js/colors'

import './Design.css'

const Image = ({image, type, colors, border}) => {
  const muted = getColorByType(colors, CODE_MUTED)
  const vibrant = getColorByType(colors, CODE_VIBRANT)
  const darkVibrant = getColorByType(colors, CODE_DARK_VIBRANT)

  return (
    <div className='design-set'>
      <Nav color={darkVibrant.color} border={false} />
      <div className='design-preview'>
        <div className='design-area' style={{backgroundImage: `url(${image.url})`}} />
        <ul className='content-area'>
          <li><h1>Lorem ipsum dolor</h1></li>
          <li><span>Vestibulum id fringilla justo, eu consectetur tortor. Sed egestas lorem suscipit mi rutrum auctor.</span></li>
          <li>
            <Button
              label={'Info Button'}
              size={'btn-xl'}
              mainColor={muted.color}
              shadowColor={muted.shadow}
              border={border}
              type={type} />

            <Button
              label={'Action Button'}
              size={'btn-xl'}
              mainColor={vibrant.color}
              shadowColor={vibrant.shadow}
              border={border}
              type={type} />
          </li>
        </ul>
      </div>
      <p className='design-image-copyright'>image by <a href={`https://unsplash.com/@${image.username}`}>@{image.username} | Unsplash</a></p>
    </div>
  )
}

export default Image
