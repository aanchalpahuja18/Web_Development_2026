import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  //1. if-else
    // if(isLoggedIn){
    //   return(
    //     <LogoutBtn/>
    //   )
    // }
    // else{
    //   return (
    //     <LoginBtn/>
    //   )
    // }

  //2. ternary operator:
  // return(
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
  //   </div>
  // )

  //4. Early Return
  if(!isLoggedIn){
    return <LoginBtn/>
  }


  //3. Logical Operator:
  return (
    <div>
      {isLoggedIn && <LogoutBtn/>}
    </div>
  )
}

export default App
