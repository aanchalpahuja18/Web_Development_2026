import './App.css'
import UserCard from './components/UserCard'
import user1 from "./assets/aanchal-image.jpg"

function App() {

  return (
    <div className='container'>
      <UserCard name="Aanchal Pahuja" desc = "Description of Aanchal" style = {{"border-radius": "10px"}} image={user1}/>
      <UserCard name="Parv Pahuja" desc = "Description of Parv" style = {{"border-radius": "10px"}} image={user1}/>
      <UserCard name="Riya Pahuja" desc = "Description of Riya" style = {{"border-radius": "10px"}} image={user1}/>
      <UserCard name="Praveen Pahuja" desc = "Description of Praveen" style = {{"border-radius": "10px"}} image={user1}/>
    </div>
  )
}

export default App
