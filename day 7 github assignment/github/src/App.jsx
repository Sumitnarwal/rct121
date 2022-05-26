import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Github } from './component/github'
import { Search } from './component/search'

function App() {

  return (
    <div className="App">
      <h2>Github</h2>
      <Search />
      <Github />
    </div>
  )
}

export default App
