import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10)

  // let counter= 10;

  const addValue=()=>{
    // counter= counter+1
    if(counter<20 ){
     
      setCounter(counter+1);
      

    }
   

    // console.log("value added", counter);

  }

  const removeValue= ()=>{

    if(counter>0){
      setCounter(counter-1)

    }
    
  }



  return (
    <>
 <h1>React Advance</h1>
 <h2>Counter value: {counter}</h2>
 <button onClick={addValue}>Add Value {counter}</button> <br /> <br />
 <button onClick={removeValue}>Revove Value {counter}</button>
    </>
  )
}

export default App;




