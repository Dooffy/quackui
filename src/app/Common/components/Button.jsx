import React from 'react'

import './Button.css'

const Button = ({label, size, color, border, shadow, inner}) => {
  const className = `btn ${size}${inner ? ' inner' : ''}${border ? ' rounded' : ''}${shadow ? ' shadow' : ''}`

  const style = inner
    ? {'color': color}
    : {backgroundColor: color, borderColor: color}

  return (
    <button
      className={className}
      style={style}>{label}</button>
  )
}

export default Button
