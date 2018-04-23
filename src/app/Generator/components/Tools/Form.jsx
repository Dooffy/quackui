import React from 'react'

import Toggle from 'app/Common/components/Toggle'
import Colors from './Form/Colors'
import ElementsDesign from './Form/ElementsDesign'

const Form = ({
  colors,
  loading,
  image,
  type,
  border,
  onColorChange,
  generateColorSet,
  onBorderChange,
  onTypeChange
}) => {
  return (
    <div className='generator-form container'>
      <h3>Step 1. Select Colors</h3>
      <Colors
        colors={colors.main}
        loading={loading}
        onColorChange={onColorChange}
        generateColorSet={generateColorSet} />

      <h3>Step 2. Select Elements Design</h3>
      <ElementsDesign
        colors={colors.main}
        border={border}
        type={type}
        onTypeChange={type => onTypeChange(type)} />

      <h3>Step 3. Configure Elements Styles</h3>
      <Toggle
        id='border'
        label='Round Borders'
        onToggleChange={() => onBorderChange()} />
    </div>
  )
}

export default Form
