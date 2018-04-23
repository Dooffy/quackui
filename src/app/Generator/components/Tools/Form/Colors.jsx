import React from 'react'

import ColorPicker from './Colors/ColorPicker'

import './Colors.css'

const Colors = ({colors, loading, onColorChange, generateColorSet}) => {
  return (
    <div className='colors'>
      <button className='colors-generate' onClick={generateColorSet} disabled={loading}>
        <img alt='Generate' src='./images/generate.svg' /> <span>Generate</span>
      </button>
      <ul>
        {
          colors.map((data, key) => {
            return <li key={key + data.color}>
              <ColorPicker
                data={data}
                onColorChange={onColorChange} />
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Colors
