import React from 'react'

import CodeExample from 'app/CodeExample/components/CodeExample'
import Nav from 'app/Common/components/Nav'

import {
  CODE_DARK_MUTED,
  CODE_DARK_VIBRANT,
  getColorByType
} from 'app/Common/js/colors'

const Navs = ({colors, border}) => {
  const vibrant = getColorByType(colors, CODE_DARK_VIBRANT)
  const muted = getColorByType(colors, CODE_DARK_MUTED)

  return (
    <div className='preview-block'>
      <h3>Nav Examples</h3>
      <div className='example'>
        <Nav color={vibrant.color} border={false} />
        <Nav color={muted.color} border={false} />
      </div>

      <CodeExample code={'navs'} cssData={{navigationBg: vibrant.color}} />
    </div>
  )
}

export default Navs
