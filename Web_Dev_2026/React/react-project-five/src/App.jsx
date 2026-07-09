import { useState } from 'react'
import './App.css'
import Card from "./components/Card"

function App() {
  const [name, setName] = useState('')

  return (
    <div>
      <Card name={name} setName={setName} title="Card 1"/>
      <Card name={name} setName={setName} title="Card 2"/>
    </div>
  )
}

export default App
