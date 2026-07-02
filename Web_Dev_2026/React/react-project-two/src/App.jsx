import './App.css'
import UserCard from './components/UserCard'

function App() {

  return (
    <div className='container'>
      <UserCard name="Aanchal Pahuja" desc = "Description of Aanchal" style = {{"border-radius": "10px"}}/>
      <UserCard name="Parv Pahuja" desc = "Description of Parv" style = {{"border-radius": "10px"}}/>
      <UserCard name="Riya Pahuja" desc = "Description of Riya" style = {{"border-radius": "10px"}}/>
      <UserCard name="Praveen Pahuja" desc = "Description of Praveen" style = {{"border-radius": "10px"}}/>
    </div>
  )
}

export default App
