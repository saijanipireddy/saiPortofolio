import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import HomePage from './components/HomePage/HomePage'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/home" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/skills" Component={Skills} />
        <Route path="/experience" Component={Experience} />
        <Route path="/projects" Component={Projects} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
