import React from 'react'

import './Inputs.css'
import Button from 'app/Common/components/Button'

const Inputs = ({colors, border, shadow}) => {
  const muted = colors.find(color => color.code === 'muted')
  const vibrant = colors.find(color => color.code === 'vibrant')

  return (
    <div className='preview-block'>
      <h3>Input Examples</h3>
      <div className='example'>
        <div className='inputs-set'>
          <div>
            <label htmlFor='username'>Login:</label><br />
            <input className={`${border ? 'rounded' : ''}`} type='text' name='username' />
          </div>
          <div>
            <label htmlFor='username'>Password:</label><br />
            <input className={`${border ? 'rounded' : ''}`} type='password' name='password' />
          </div>
          <div>
            <input type='radio' name='gender' value='male' /> Male
            <br />
            <input type='radio' name='gender' value='female' /> Female
          </div>
          <div>
            <input type='checkbox' name='terms' value='terms' /> I Accept <a style={{color: vibrant.color}} href='#'>T&C</a>
          </div>

          <div className='form-buttons'>
            <Button
              label={'Back'}
              size={'xl'}
              color={muted.color}
              border={border}
              shadow={shadow}
              inner={false} />

            <Button
              label={'Submit'}
              size={'xl'}
              color={vibrant.color}
              border={border}
              shadow={shadow}
              inner={false} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inputs
