import { useContext, useState } from 'react'

import './App.css'
import { Button } from './components/button'


import { ThemeContext } from './Context/themeContext'
import "./components/button.css"
function App() {
  const [theme, toogleTheme] = useContext(ThemeContext)
  return (
    <div className="App">
      <h1>hello</h1>
      <Button text="THEME" /><br />
      <button onClick={toogleTheme}>Toggle</button>
      {
        //<h1>Hello ContextApi</h1>
        //<Counter/>

      }
    </div>
  )
}

export default App
