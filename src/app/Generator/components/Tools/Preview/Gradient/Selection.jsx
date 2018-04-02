import React from 'react'

import {shadeColor2} from 'app/Common/js/colors'

import './Selection.css'

const STEPS = [
  {
    from: -0.8,
    to: -0.4
  },
  {
    from: -0.4,
    to: 0
  },
  {
    from: -0.2,
    to: 0.2
  },
  {
    from: 0,
    to: 0.4
  },
  {
    from: 0.4,
    to: 0.8
  }
]

const Selection = ({colorData}) => {
  const baseColor = colorData.color
  return (
    <div className='gradients-selection'>
      <h4>{colorData.label} Gradients</h4>
      <ul className='gradients'>
        {
          STEPS.map(({from, to}, key) => {
            const colorFrom = shadeColor2(baseColor, from)
            const colorTo = shadeColor2(baseColor, to)
            return (
              <li key={key}>
                <div className='gradien-box'>
                  <div className='gradien-colors'>
                    <div className='gradien-colors-example' style={{backgroundColor: colorFrom}} /> <h5>{colorFrom}</h5>
                  </div>
                  <div className='gradien-example' style={{background: `linear-gradient(0deg, ${colorTo}, ${colorFrom})`}} />
                  <div className='gradien-colors'>
                    <div className='gradien-colors-example' style={{backgroundColor: colorTo}} /> <h5>{colorTo}</h5>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Selection
