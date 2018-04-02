import React from 'react'

import Selection from './Gradient/Selection'
import './Gradients.css'

const Gradients = ({colors}) => {
  return (
    <div>
      <h3>Gradients Variations</h3>
      {
        colors.map((data, key) => {
          return <Selection key={key} colorData={data} />
        })
      }
    </div>
  )
}

export default Gradients
