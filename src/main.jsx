import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Footer from './Components/Footer.jsx'
import SkillsBar from './Components/SkillsBar.jsx'
import Projects from './Components/Projects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Navbar/>
   <Hero/>
   <Projects/>
   <SkillsBar/>
   <Footer/>
  </StrictMode>,
)
