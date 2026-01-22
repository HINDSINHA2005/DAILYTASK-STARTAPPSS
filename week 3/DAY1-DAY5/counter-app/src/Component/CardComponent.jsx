import React from 'react'

const CardComponent = (props) => {
  return (
    <div className='card-container'>
      <h1>PRODUCT:{props.name}</h1>
      <p>PRICE:{props.price}</p>
      <img src={props.image} alt="NASA"/>
    </div>
  )
}

export default CardComponent
