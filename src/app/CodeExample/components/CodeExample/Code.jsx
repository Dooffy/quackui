import React from 'react'
import Mustache from 'mustache'
import SyntaxHighlighter from 'react-syntax-highlighter'
import arduinoLight from 'react-syntax-highlighter/styles/hljs/arduino-light'

import './Code.css'

const Code = ({header, template, data}) => {
  return (
    <div className='code-highlight'>
      <p className='code-highlight-label'>{header}</p>
      <SyntaxHighlighter language='javascript' style={arduinoLight}>
        {Mustache.render(template, data)}
      </SyntaxHighlighter>
    </div>
  )
}

export default Code
