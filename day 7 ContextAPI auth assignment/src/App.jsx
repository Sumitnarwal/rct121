import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { Body } from './components/body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Navbar/>
    <Body/>
    </div>
  )
}

export default App
