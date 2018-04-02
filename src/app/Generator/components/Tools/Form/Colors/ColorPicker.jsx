import React, {Component} from 'react'
import {ChromePicker} from 'react-color'

import './ColorPicker.css'

class ColorPicker extends Component {
  constructor (props) {
    super(props)

    this.state = {
      displayColorPicker: false,
      hex: this.props.data.color
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick () {
    this.setState({displayColorPicker: !this.state.displayColorPicker})
  }

  handleClose () {
    this.props.onColorChange(this.props.data.code, this.state.hex)
    this.setState({displayColorPicker: false})
  }

  handleChange (color) {
    this.setState({hex: color.hex})
  };

  getColorPicker () {
    return this.state.displayColorPicker
      ? (
        <div className='color-box-popup'>
          <div className='color-box-cover' onClick={this.handleClose} />
          <ChromePicker color={this.state.hex} onChange={this.handleChange} disableAlpha />
        </div>
      )
      : null
  }

  render () {
    return (
      <div className='color-box'>
        <h4>{this.props.data.label}</h4>
        {this.getColorPicker()}
        <div className='selected-color' style={{backgroundColor: this.state.hex}} onClick={this.handleClick} />
        <h5>{this.state.hex}</h5>
      </div>
    )
  }
}

export default ColorPicker
