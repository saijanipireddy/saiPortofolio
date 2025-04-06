import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { Moon, Sun, Menu, X } from "lucide-react";
import './Navbar.css'
import ThemeProvider, { ThemeContext } from '../../Context/ThemeContext';

const Navbar = () => {
  const {darkMode, toggleTheme} = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className='link'><h1> Naga sai </h1></Link>
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu /> }
        </button>
        <ul className={`nav-links ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)}>
          <Link to="/home" className="linking-element"> <li><a href="#">Home</a></li> </Link>
          <Link to="/about" className="linking-element"><li><a href="#">About</a></li></Link>
          <Link to="/skills" className="linking-element"><li><a>Skills</a></li></Link>
          <Link to="/experience" className="linking-element"><li><a href="#">Experience</a></li></Link>
          <Link to="/projects" className="linking-element"><li><a href="#">Projects</a></li></Link>
         <Link to="/contact" className="linking-element"> <li><a href="#">contact</a></li> </Link>
          <li><button className="theme-button" onClick={toggleTheme}> 
              {darkMode ? <Sun /> : <Moon />}
            </button></li>
        </ul>
      </div>
      
    </nav>
  )
}

export default Navbar
