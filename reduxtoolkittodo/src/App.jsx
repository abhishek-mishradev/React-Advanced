import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {


  return (
    <>
    <AddTodo/>
    <Todos/>
<h1>Redux Toolkit</h1>
    </>
  )
}

export default App
