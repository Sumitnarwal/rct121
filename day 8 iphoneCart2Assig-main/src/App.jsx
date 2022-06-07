import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Cart } from './navbarComp/cart'
import { Ipads } from './navbarComp/iPad'
import { Iphone } from './navbarComp/Iphone'
import { Mac } from './navbarComp/Mac'
import { Store } from './navbarComp/store'
import { Watch } from './navbarComp/Watch'
import { Navbar } from './components/navbar'
import { Banner } from './components/banner'
import { Footer } from './components/footer'
import { ProdDetail } from './components/productDetailPage'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Routes>
        <Route path='/cart' element={<Cart />} />
        <Route path='/ipad' element={<Ipads />} />
        <Route path='/iphone' element={<Iphone />} />
        <Route path='/mac' element={<Mac />} />
        <Route path='/' element={<Store />} />
        <Route path='/watch' element={<Watch />} />
        <Route path='/prod/:id' element={<ProdDetail/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
