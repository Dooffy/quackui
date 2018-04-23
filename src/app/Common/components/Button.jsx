import React from 'react'

import {
  BUTTON_TYPE_INNER,
  BUTTON_TYPE_SHADOW,
  BUTTON_TYPE_CUBIC
} from 'app/Common/js/buttons'

import './Button.css'

const Button = ({type, label, size, mainColor, shadowColor, border}) => {
  const borderClass = border ? ' rounded' : ''
  let className = `btn ${size}${borderClass}`
  let style = {backgroundColor: mainColor, borderColor: mainColor}

  switch (type) {
    case BUTTON_TYPE_INNER:
      className += ' inner'
      style = {color: mainColor}
      break

    case BUTTON_TYPE_SHADOW:
      className += ' shadow'
      break

    case BUTTON_TYPE_CUBIC:
      className += ' cubic'
      style = {backgroundColor: mainColor, borderColor: mainColor, '--box-shadow-color': shadowColor}
      break
  }

  return (
    <button
      className={className}
      style={style}>{label}</button>
  )
}

export default Button
