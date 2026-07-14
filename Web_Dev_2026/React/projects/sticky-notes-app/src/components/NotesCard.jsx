import React from 'react'
import "./NotesCard.css"

const NotesCard = ({el, handleDelete}) => {
  return (
    <div className='container'>
      <div className='card-content' style={{ backgroundColor: "light"+el.color }}>
        <div className="card-info">
          <p className='title'>{el.title}</p>
          <p className='desc'>{el.desc}</p>
          <p className='created'>Created: {Date()}</p>
        </div>
        <div className="card-btns">
          <button>Edit</button>
          <button onClick={() => handleDelete(el.id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default NotesCard
