import React from 'react'

const Square = ({colorValue,hexValue, isDarkText}) => {
  return (
    <section className='square' style={{
      backgroundColor:colorValue,
      color:isDarkText ? "#000" : "#fff"
    }}>
      <h1>Square</h1>
    </section>
  )
}

export default Square
