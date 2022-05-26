import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CartContextProvider } from './Context/CartContext'
import { ThemeContextProvder } from './Context/themeContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeContextProvder>
  <CartContextProvider>
  <App />
  </CartContextProvider>
  </ThemeContextProvder>
  </React.StrictMode>
)
