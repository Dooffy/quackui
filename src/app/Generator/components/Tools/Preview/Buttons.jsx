import React from 'react'

import Button from 'app/Common/components/Button'
import CodeExample from 'app/CodeExample/components/CodeExample'

import {
  BUTTON_TYPE_SHADOW,
  BUTTON_TYPE_CUBIC
} from 'app/Common/js/buttons'

import './Buttons.css'

const buttons = [
  {size: 'btn-xl', label: 'Button XL'},
  {size: 'btn-l', label: 'Button L'},
  {size: 'btn-m', label: 'Button M'},
  {size: 'btn-s', label: 'Button S'},
  {size: 'btn-xs', label: 'Button XS'}
]

const getButtons = (colorData, border, type) => {
  return buttons.map(({size, label}, key) => {
    return <Button
      key={key}
      label={label}
      size={size}
      mainColor={colorData.color}
      shadowColor={colorData.shadow}
      border={border}
      type={type} />
  })
}

const Buttons = ({colors, border, type}) => {
  return (
    <div className='preview-block'>
      <h3>Buttons</h3>

      <div className='example'>
        {
          colors.map((data, key) => {
            return (
              <div className='buttons-set' key={key}>
                <h4>{data.label} Buttons</h4>
                <div>
                  {getButtons(data, border, type)}
                </div>
                <div>
                  {getButtons(data, border, 'inner')}
                </div>
              </div>
            )
          })
        }
      </div>

      <CodeExample
        code={'buttons'}
        cssData={{
          colors,
          rounded: border,
          shadow: type === BUTTON_TYPE_SHADOW,
          cubic: type === BUTTON_TYPE_CUBIC
        }} />
    </div>
  )
}

export default Buttons
