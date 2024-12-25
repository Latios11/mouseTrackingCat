import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cat from './components/Cat.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cat />
    <App />
  </StrictMode>,
)
