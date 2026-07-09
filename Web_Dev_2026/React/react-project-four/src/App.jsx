import './App.css'
import Card from "./components/Card"
import Button from "./components/Button"
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1)
  }
  return (
    <div>
      {/* <Card>
        <h1>Hey there!</h1>
        <h2>I am Aanchal Pahuja</h2>
        <h3>A software engineer by profession</h3>
      </Card> */}

      <Button handleClick = {handleClick}>
        Count value is: {count}
      </Button>
    </div>
  )
}

export default App
