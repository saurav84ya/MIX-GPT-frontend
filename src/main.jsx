import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyProvider from './context/MyProvider.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyProvider>
      <Toaster/>
    <App />
    </MyProvider>
  </StrictMode>
)
