import React from 'react'

import Coffee from './About/Coffee'

const About = () => {
  return (
    <div className='about'>
      <h3>About QuackUI</h3>
      <span>
        QuackUI is a simple website design generator for creating unique, randomly generated website’s colors and components.
        We believe that the best colors are provided by nature itself, so all generated by this tool colors are based on the real photos.
      </span>
      <br />
      <br />
      <span>
        If you find the project useful and you would like to say “thank you”, you could easily do it by buying a cup of coffee :)
      </span>
      <Coffee />
    </div>
  )
}

export default About
