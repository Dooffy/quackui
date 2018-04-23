import React, {Component} from 'react'
import fetch from 'isomorphic-fetch'

import ShowMore from './CodeExample/ShowMore'
import Code from './CodeExample/Code'

import './CodeExample.css'

class CodeExample extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showCode: false,
      htmlTemplate: '',
      cssTemplate: ''
    }
  }

  fetchTemplate (path) {
    return fetch(path)
      .then(response => {
        return response.text()
      })
  }

  onShowCode () {
    let requestHtml = this.fetchTemplate(`/templates/${this.props.code}/html.template`)
    let requestCss = this.fetchTemplate(`/templates/${this.props.code}/css.template`)

    Promise.all([requestHtml, requestCss]).then(result => {
      this.setState(
        {
          showCode: true,
          htmlTemplate: result[0],
          cssTemplate: result[1]
        }
      )
    })
  }

  render () {
    return (
      <div className='code-example'>
        {
          this.state.showCode
            ? (
              <ul className='code-box'>
                <li><Code header='HTML' template={this.state.htmlTemplate} data={this.props.htmlData} /></li>
                <li><Code header='CSS' template={this.state.cssTemplate} data={this.props.cssData} /></li>
              </ul>
            ) : <ShowMore onShowCode={() => this.onShowCode()} />
        }
      </div>
    )
  }
}

export default CodeExample
