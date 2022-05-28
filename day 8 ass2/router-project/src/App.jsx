import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Cart } from './components/cart'
import { Ipads } from './components/iPad'
import { Iphone } from './components/Iphone'
import { Mac } from './components/Mac'
import { Store } from './components/store'
import { Watch } from './components/Watch'
import { Navbar } from './components/navbar'
import { Banner } from './components/banner'

function App() {
 
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
  <Routes>
  <Route path='/cart' element={<Cart/>} />
  <Route path='/ipad' element={<Ipads/>} />
  <Route path='/iphone' element={<Iphone/>} />
  <Route path='/mac' element={<Mac/>} />
  <Route path='/store' element={<Store/>} />
  <Route path='/watch' element={<Watch/>} />
  </Routes>
    </div>
  )
}

export default App
