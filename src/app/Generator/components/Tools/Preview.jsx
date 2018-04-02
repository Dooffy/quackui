import React from 'react'

import Design from './Preview/Design'
import Gradients from './Preview/Gradients'
import Headers from './Preview/Headers'
import Buttons from './Preview/Buttons'
import Inputs from './Preview/Inputs'
import Links from './Preview/Links'
import Navs from './Preview/Navs'

import './Preview.css'

const Preview = ({colors, image, border, shadow}) => {
  return (
    <div className='preview'>
      <Design image={image} border={border} shadow={shadow} colors={colors} />
      <Gradients colors={colors} />
      <Headers colors={colors} />
      <Buttons colors={colors} border={border} shadow={shadow} />
      <Links colors={colors} />
      <Inputs colors={colors} border={border} shadow={shadow} />
      <Navs colors={colors} border={border} />
    </div>
  )
}

export default Preview
