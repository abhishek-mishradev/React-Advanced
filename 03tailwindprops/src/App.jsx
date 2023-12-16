import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  // const [count, setCount] = useState(0)
  let myObj={
    username:"abhishek mishra",
    age:28
  }

  let newArr=[1,2,3]

  return (
    <>
 
 <h1 className='bg-green-400 text-black rounded-xl mb-5'>Tailwind CSS</h1>
 {/* <Card channel="mishra" someObj={myObj}/> */}
 {/* <Card username="mishra" someArr={newArr}/> */}
 <Card username="mishra" btnText="click me"/>
 {/* <Card username="abhishek" btnText="click karo"/> */}
 <Card username="abhishek"/> agar koi value dena bhool gya btn ka to default value de do

 
    </>
  )
}

export default App
