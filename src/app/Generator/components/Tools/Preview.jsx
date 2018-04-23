import React from 'react'

import Design from './Preview/Design'
import Gradients from './Preview/Gradients'
import Headers from './Preview/Headers'
import Buttons from './Preview/Buttons'
import ActionButtons from './Preview/ActionButtons'
import Inputs from './Preview/Inputs'
import Links from './Preview/Links'
import Navs from './Preview/Navs'

import './Preview.css'

const Preview = ({colors, image, border, type}) => {
  return (
    <div className='preview'>
      <Design colors={colors.main} image={image} border={border} type={type} />
      <Gradients colors={colors.main} />
      <Navs colors={colors.main} border={border} />
      <Headers colors={colors.main} />
      <Buttons colors={colors.main} border={border} type={type} />
      <ActionButtons colors={colors.action} border={border} type={type} />
      <Links colors={colors.main} />
      <Inputs colors={colors.main} border={border} type={type} />
    </div>
  )
}

export default Preview
