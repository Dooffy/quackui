import React from 'react'

import './Toggle.css'

const Toggle = ({id, label, onToggleChange}) => {
  return (
    <div className='toggle'>
      <ul>
        <li className='toggle-label'>
          <h4>{label}</h4>
        </li>
        <li className='toggle-button'>
          <input type='checkbox' id={id} onClick={() => onToggleChange()} /><label htmlFor={id}>Toggle</label>
        </li>
      </ul>
    </div>
  )
}

export default Toggle
