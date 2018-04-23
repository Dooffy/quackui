import React from 'react'

import Button from 'app/Common/components/Button'
import './RadioButton.css'
import {BUTTON_TYPE_SIMPLE} from 'app/Common/js/buttons'

const RadioButton = ({id, checked, type, label, border, mainColor, shadowColor, onTypeChange}) => {
  return (
    <div className='button-selector'>
      <div>
        <Button
          label={label}
          size={'btn-l'}
          mainColor={mainColor}
          shadowColor={shadowColor}
          border={border}
          type={type}
          inner={false} />
      </div>
      <div>
        <input
          type='radio'
          id={id}
          name='radio'
          onClick={() => onTypeChange()}
          defaultChecked={type === BUTTON_TYPE_SIMPLE} />
        <label htmlFor={id} />
      </div>
    </div>
  )
}

export default RadioButton
