import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import InputNote from './components/InputNote'
import NotesCard from './components/NotesCard'
import Search from './components/Search'

function App() {

  const [showNote, setShowNote] = useState(false);
  const [cards, setCards] = useState([]);
  const [searchText, setSearchText] = useState("");


  function handleClick(){
    console.log("Here");
    setShowNote(true);    
  }

  function handleDelete(id){
    setCards(prevCards => prevCards.filter((el) => el.id != id))
  }

  function handleSearchChange(searchText){
    setSearchText(searchText);
  }

  const filteredCards = cards.filter((card)=>
    card.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Header/>
      <button onClick={handleClick} className='add-btn'>+ Add New Note</button>
      {showNote && <InputNote setShowNote={setShowNote} cards = {cards} setCards = {setCards}/>}
      {cards.length>0 && <Search handleSearchChange={handleSearchChange}/>}
      <div className="container">
        {filteredCards.map((el) => (
          <NotesCard
            key={el.id}
            el={el}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default App
