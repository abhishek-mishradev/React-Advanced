import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10)

  // let counter= 10;

  const addValue=()=>{
    // counter= counter+1
    // if(counter<20 ){
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1); === in sb se only one value update hogi jo ek baar hogi ex initial 10 h to ye 11 karega bs 


      setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);
      //  in sb se jitni baar ye h unti baar value update ho kr aayegi jaise ex 10 or ye 4 baar h to seedhe 14 ho jaayegi 

      // dono ko chal k dekh lo jyada clear hoga 
      

    // }
   

    // console.log("value added", counter);

  }

  const removeValue= ()=>{

    // if(counter>0){
      setCounter(counter-1)

    // }
    
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




