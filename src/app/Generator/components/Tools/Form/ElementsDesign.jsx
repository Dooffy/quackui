import React from 'react'

import RadioButton from './ElementsDesign/RadioButton'

import {
  CODE_VIBRANT,
  getColorByType
} from 'app/Common/js/colors'

import {
  BUTTON_TYPE_SIMPLE,
  BUTTON_TYPE_SHADOW,
  BUTTON_TYPE_CUBIC
} from 'app/Common/js/buttons'

import './ElementsDesign.css'

const ElementsDesign = ({colors, type, border, onTypeChange, generateColorSet}) => {
  const vibrant = getColorByType(colors, CODE_VIBRANT)

  return (
    <div className='elements-design'>
      <ul>
        <li>
          <RadioButton
            id='simple-btn'
            type={BUTTON_TYPE_SIMPLE}
            label='Simple Button'
            checked={type === BUTTON_TYPE_SIMPLE}
            border={border}
            mainColor={vibrant.color}
            onTypeChange={() => onTypeChange(BUTTON_TYPE_SIMPLE)} />
        </li>
        <li>
          <RadioButton
            id='shadow-btn'
            type={BUTTON_TYPE_SHADOW}
            label='Shadow Button'
            checked={type === BUTTON_TYPE_SHADOW}
            border={border}
            mainColor={vibrant.color}
            onTypeChange={() => onTypeChange(BUTTON_TYPE_SHADOW)} />
        </li>
        <li>
          <RadioButton
            id='cubic-btn'
            type={BUTTON_TYPE_CUBIC}
            label='3D Button'
            checked={type === BUTTON_TYPE_CUBIC}
            border={border}
            mainColor={vibrant.color}
            shadowColor={vibrant.shadow}
            onTypeChange={() => onTypeChange(BUTTON_TYPE_CUBIC)} />
        </li>
      </ul>
    </div>
  )
}

export default ElementsDesign
