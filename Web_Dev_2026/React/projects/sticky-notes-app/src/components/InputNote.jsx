import React, { useState } from 'react'
import NotesCard from './NotesCard';
import "./InputNote.css"

const InputNote = ({setShowNote, cards, setCards}) => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [color, setColor]  = useState(''); 

    function handleTitleChange(e){
        console.log(e.target.value);
        setTitle(e.target.value);
    }

    function handleDescChange(e){
        console.log(e.target.value);
        setDesc(e.target.value);
    }

    function handleColorChange(e){
        console.log(e.target.value);
        setColor(e.target.value);
    }

    function handleCancel(){
        setShowNote(false)
    }

    function handleSave(){
        if(title === "" || desc === ""){
            alert("Please fill in all fields");
            return;
        }
        let newNote = {
            id: Date.now(),
            title,
            desc,
            color
        }
        setCards([...cards, newNote]);
        setTitle("");
        setDesc("");
        setColor("");
    }
    
    
  return (
    <div className='inputNote'>
        <div className='inputFields'>
            <label htmlFor="title">Title</label>
            <input type="text" id='title' onChange={handleTitleChange} value={title}/>
            <label htmlFor="desc">Description</label>
            <input type="text" id='desc' onChange={handleDescChange} value={desc}/>
            <select name="bgcolor" id="bgcolor" onChange={handleColorChange} value={color}>
                <option value="">Choose bg color</option>
                <option value="yellow">Yellow</option>
                <option value="pink">Pink</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="coral">Coral</option>
            </select>
        </div>
        <div className='buttons'>
            <button className='save-btn' onClick={handleSave}>Save</button>
            <button className='cancel-btn' onClick={handleCancel}>Cancel</button>
        </div>
    </div>
  )
}

export default InputNote
