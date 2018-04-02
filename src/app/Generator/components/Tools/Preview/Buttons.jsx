import React from 'react'

import Button from 'app/Common/components/Button'
import './Buttons.css'

const buttons = [
  {size: 'xl', label: 'Button XL'},
  {size: 'l', label: 'Button L'},
  {size: 'm', label: 'Button M'},
  {size: 's', label: 'Button S'},
  {size: 'xs', label: 'Button XS'}
]

const getButtons = (color, border, shadow, inner) => {
  return buttons.map(({size, label}, key) => {
    return <Button
      key={key}
      label={label}
      size={size}
      color={color}
      border={border}
      shadow={shadow}
      inner={inner} />
  })
}

const Buttons = ({colors, border, shadow}) => {
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
                  {getButtons(data.color, border, shadow, false)}
                </div>
                <div>
                  {getButtons(data.color, border, shadow, true)}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Buttons
