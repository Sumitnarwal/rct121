import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GitContextProvider } from './context/gitContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GitContextProvider>
  <App />
  </GitContextProvider>
  </React.StrictMode>
)
