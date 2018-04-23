import React from 'react'

import Button from 'app/Common/components/Button'
import CodeExample from 'app/CodeExample/components/CodeExample'

import {
  BUTTON_TYPE_SHADOW,
  BUTTON_TYPE_CUBIC
} from 'app/Common/js/buttons'

import './Buttons.css'

const ActionButtons = ({colors, border, type}) => {
  return (
    <div className='preview-block'>
      <h3>Action Buttons</h3>

      <div className='example'>
        <div className='buttons-set'>
          <h4>Action Buttons</h4>
          <div>
            {
              colors.map((colorData, key) => {
                return <Button
                  key={key}
                  label={colorData.label}
                  size='btn-l'
                  mainColor={colorData.color}
                  shadowColor={colorData.shadow}
                  border={border}
                  type={type} />
              })
            }
          </div>
        </div>
      </div>

      <CodeExample
        code={'action-buttons'}
        cssData={{
          colors,
          rounded: border,
          shadow: type === BUTTON_TYPE_SHADOW,
          cubic: type === BUTTON_TYPE_CUBIC
        }} />
    </div>
  )
}

export default ActionButtons
