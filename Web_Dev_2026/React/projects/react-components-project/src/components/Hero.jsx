import React from 'react'
import "./Hero.css"

const Hero = ({headline, subtitle, name}) => {
  return (
    <div className='hero'>
      <h2 id='headline'>{headline}</h2>
      <h2 id='name'>{name}</h2>
      <h3 id='subtitle'>{subtitle}</h3>
    </div>
  )
}

export default Hero
