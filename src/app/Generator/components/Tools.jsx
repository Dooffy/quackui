import React, {Component} from 'react'

import Form from './Tools/Form'
import Preview from './Tools/Preview'
import Loader from './Tools/Loader'
import About from './Tools/About'
import Error from './Tools/Error'

import {generateColors} from 'app/Common/js/colors'
import {getImages, getRandomImageUrl} from 'app/Common/js/images'

import {
  BUTTON_TYPE_SIMPLE
} from 'app/Common/js/buttons'

import './Tools.css'

class Tools extends Component {
  constructor (props) {
    super(props)

    this.onColorChange = this.onColorChange.bind(this)
    this.onBorderChange = this.onBorderChange.bind(this)
    this.onTypeChange = this.onTypeChange.bind(this)
    this.generateColorSet = this.generateColorSet.bind(this)

    this.state = {
      border: false,
      type: BUTTON_TYPE_SIMPLE,
      images: null,
      image: null,
      colors: null,
      error: false,
      loading: false
    }
  }

  componentDidMount () {
    if (this.state.colors === null) this.generateColorSet()
  }

  async generateColorSet () {
    this.setState({loading: true})
    try {
      if (this.state.images === null) this.setState({images: await getImages()})

      const image = await getRandomImageUrl(this.state.images, this.state.image)
      this.setState({
        image,
        loading: false,
        colors: await generateColors(image.url)
      })
    } catch (err) {
      console.log(err)
      this.setState({error: true})
    }
  }

  onColorChange (key, value) {
    let colors = this.state.colors
    colors.main = this.state.colors.main.map(element => {
      if (element.code === key) element.color = value
      return element
    })
    this.setState(colors)
  }

  onBorderChange () {
    this.setState({border: !this.state.border})
  }

  onTypeChange (type) {
    this.setState({type: type})
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
          loading={this.state.loading}
          type={this.state.type}
          border={this.state.border}
          onColorChange={this.onColorChange}
          onBorderChange={this.onBorderChange}
          onTypeChange={this.onTypeChange}
          generateColorSet={this.generateColorSet} />
        <h1>Here's the Duck!</h1>
        <Preview
          colors={this.state.colors}
          image={this.state.image}
          border={this.state.border}
          type={this.state.type} />
      </div>
    )
  }
}

export default Tools
