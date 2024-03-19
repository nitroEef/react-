import React from 'react'
import './Hero.css'



const Hero = () => {
    const handleClick = () => {
        console.log('I was clicked !!!')
    }
  return (
    <div className='hero'>
      <h3> zainab is our latest heroine</h3>
      <button onClick={handleClick}>Click me</button>

    </div>
  )
}

export default Hero
