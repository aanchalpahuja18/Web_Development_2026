import React from 'react'

const Card = (props) => {
  return (
    <div>
      <h1>I am {props.title}</h1>
      <input type="text" onChange={(e) => {
        {props.setName(e.target.value)}
      }}/>
      <p>Value of name is: {props.name}</p>
    </div>
  )
}

export default Card
