import './App.css'

function App() {

  function handleClick(){
    alert("I am clicked")
  }

  function handleMouseOver(){
    alert("I have entered the para element")
  }

  function handleChange(e){
    console.log("Value of text till now: ", e.target.value)
  }
  
  function handleSubmit(e){
    e.preventDefault();
    alert("Form submitted successfully")
  }
  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
      
      {/* <p onMouseOver={handleMouseOver}>I am a para</p>
      <button onClick={handleClick}>Click Me</button> */}
    </div>
  )
}

export default App
