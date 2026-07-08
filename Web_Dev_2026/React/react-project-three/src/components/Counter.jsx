import React, { useState } from 'react'
import "./Counter.css"

const Counter = () => {
    const [count, setCount] = useState(0);
    
  return (
    <div className='counter-container'>
      <p className='para'>You have clicked {count} times</p>
      <div className="btn-container">
            <button className='btn' onClick={function () {
            setCount(count+1)
            }}>Increment</button>
            <button className='btn' onClick={function () {
                if(count <= 0){
                    setCount(0);
                }
                else{
                    setCount(count-1);
                }
            }}>Decrement</button>
            <button className='btn' onClick={function () {
                setCount(0)
            }}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
