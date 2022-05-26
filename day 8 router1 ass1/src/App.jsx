import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Homepage'
import { Products } from './components/Products'

import { Navbar } from './components/navbar'
import { AllProducts } from './components/ProductDetails'

function App() {

  return (
    <div className="App">
    <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/products' element={<Products/>}>
     </Route>
     <Route path='/products/:id' element={<AllProducts/>}/>
     </Routes>
    </div>
  )
}

export default App
