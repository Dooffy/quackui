import React from 'react'

import './Inputs.css'

import {
  CODE_MUTED,
  CODE_VIBRANT,
  getColorByType
} from 'app/Common/js/colors'

import Button from 'app/Common/components/Button'
import CodeExample from 'app/CodeExample/components/CodeExample'

const Inputs = ({colors, border, type}) => {
  const muted = getColorByType(colors, CODE_MUTED)
  const vibrant = getColorByType(colors, CODE_VIBRANT)

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
            <input type='radio' id='simple-radio-1' name='gender' value='male' />
            <label htmlFor='simple-radio-1' /> Male
            <br />
            <input type='radio' id='simple-radio-2' name='gender' value='female' />
            <label htmlFor='simple-radio-2' /> Female
          </div>
          <div>
            <input type='checkbox' id='simple-checkbox-1' name='terms' value='terms' /> <label htmlFor='simple-checkbox-1' /> I Accept <a style={{color: vibrant.color}} href='#'>T&C</a>
          </div>

          <div className='form-buttons'>
            <Button
              label={'Back'}
              size={'btn-xl'}
              mainColor={muted.color}
              shadowColor={muted.shadow}
              border={border}
              type={type} />

            <Button
              label={'Submit'}
              size={'btn-xl'}
              mainColor={vibrant.color}
              shadowColor={vibrant.shadow}
              border={border}
              type={type} />
          </div>
        </div>
      </div>

      <CodeExample
        code={'inputs'}
        cssData={{selectedColor: vibrant.color, rounded: border}} />
    </div>
  )
}

export default Inputs
