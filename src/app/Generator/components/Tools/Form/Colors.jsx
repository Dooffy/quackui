import React from 'react'

import ColorPicker from './Colors/ColorPicker'

import './Colors.css'

const Colors = ({colors, onColorChange, generateColorSet}) => {
  return (
    <div>
      <ul className='colors'>
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
      <button className='colors-generate' onClick={generateColorSet}>
        <img alt='Generate' src='./images/generate.svg' /> <span>Generate</span>
      </button>
    </div>
  )
}

export default Colors
