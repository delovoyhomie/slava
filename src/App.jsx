import {BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {Navbar, Home, Skills, Work, Education, Activities} from './components'
import './App.css'

function App() {
  return (
    <div className='flex h-auto flex-col md:flex-row md:h-[100vh] w-[100%] bg-hero-pattern bg-cover bg-no-repeat bg-center pt-7 md:pt-14 min-h-screen'>
      <Navbar></Navbar>
      <Home></Home>
      <Skills></Skills>
      <Work></Work>
      <Education></Education>
      <Activities></Activities>
    </div>
  )
}

export default App
