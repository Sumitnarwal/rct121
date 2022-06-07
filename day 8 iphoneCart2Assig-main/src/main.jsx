import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import {CartContextProvider} from "./context/cartContetext"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <CartContextProvider>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </CartContextProvider>
  </React.StrictMode>
)
