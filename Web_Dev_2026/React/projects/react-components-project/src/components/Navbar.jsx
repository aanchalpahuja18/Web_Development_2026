import React from 'react'
import "./Navbar.css"

const Navbar = ({site}) => {
    
  return (
    <div className='navbar'>
      <h1>{site}</h1>
    </div>
  )
}

export default Navbar
