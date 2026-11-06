import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Skills from './Component/Skills.jsx'
import About from './Component/About.jsx'
import Title from './Component/Title.jsx'
import Education from './Component/Education.jsx'
import Contact from './Component/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> <About /><Education/><Skills /><Title/><Contact/>
  </StrictMode>,
)
