import React from 'react'

import Toggle from 'app/Common/components/Toggle'
import Colors from './Form/Colors'

const Form = ({colors, image, onColorChange, generateColorSet, onBorderChange, onShadowChange}) => {
  return (
    <div className='generator-form container'>
      <h3>Step 1. Select Colors</h3>
      <Colors colors={colors} onColorChange={onColorChange} generateColorSet={generateColorSet} />

      <h3>Step 2. Configure Elements Styles</h3>
      <Toggle id='border' label='Round Borders' onToggleChange={() => onBorderChange()} />
      <Toggle id='shadow' label='Add Shadow' onToggleChange={() => onShadowChange()} />
    </div>
  )
}

export default Form
