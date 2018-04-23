import React from 'react'

import './ShowMore.css'

const ShowMore = ({onShowCode}) => {
  return (
    <div className='show-more'>
      <button className='show-more-button' onClick={() => onShowCode()}>
        <img alt='Code' src='./images/src.svg' /> <span>Show Code Example</span>
      </button>
    </div>
  )
}

export default ShowMore
