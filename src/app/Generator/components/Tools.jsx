import React, {Component} from 'react'

import Form from './Tools/Form'
import Preview from './Tools/Preview'
import Loader from './Tools/Loader'
import About from './Tools/About'
import Error from './Tools/Error'

import {generateColors} from 'app/Common/js/colors'
import {getRandomImageUrl} from 'app/Common/js/images'

import './Tools.css'

class Tools extends Component {
  constructor (props) {
    super(props)

    this.onColorChange = this.onColorChange.bind(this)
    this.onBorderChange = this.onBorderChange.bind(this)
    this.onShadowChange = this.onShadowChange.bind(this)
    this.generateColorSet = this.generateColorSet.bind(this)

    this.state = {
      border: false,
      shadow: false,
      image: null,
      colors: null,
      error: false
    }
  }

  componentDidMount () {
    if (this.state.colors === null) this.generateColorSet()
  }

  async generateColorSet () {
    try {
      const image = getRandomImageUrl(this.state.image)
      this.setState({
        image,
        colors: await generateColors(image)
      })
    } catch (err) {
      this.setState({error: true})
    }
  }

  onColorChange (key, value) {
    const colors = this.state.colors.map(element => {
      if (element.code === key) element.color = value
      return element
    })
    this.setState(colors)
  }

  onBorderChange () {
    this.setState({border: !this.state.border})
  }

  onShadowChange (key, value) {
    this.setState({shadow: !this.state.shadow})
  }

  render () {
    if (this.state.error === true) return <Error />
    if (this.state.colors === null) return <Loader />
    return (
      <div className='tools container'>
        <About />
        <h1>Quack - Quack!</h1>
        <Form
          colors={this.state.colors}
          border={this.state.border}
          shadow={this.state.shadow}
          onColorChange={this.onColorChange}
          onBorderChange={this.onBorderChange}
          onShadowChange={this.onShadowChange}
          generateColorSet={this.generateColorSet}
        />
        <h1>Here's the Duck!</h1>
        <Preview
          colors={this.state.colors}
          image={this.state.image}
          border={this.state.border}
          shadow={this.state.shadow} />
      </div>
    )
  }
}

export default Tools
