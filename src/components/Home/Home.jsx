import React, { useState, useEffect } from 'react'
import SocialLinks from '../SocialLinks/SocialLinks'
import './Home.css'

const roles = [
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Data Analyst',

  ]

const Home = () => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const fullText = roles[index]
    const speed = deleting ? 50 : 100

    const handleTyping = () => {
      setText((prev) =>
        deleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      )

      if (!deleting && text === fullText) {
        setTimeout(() => setDeleting(true), 1000) // pause before delete
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex((prev) => (prev + 1) % roles.length)
      }
    }

    const timer = setTimeout(handleTyping, speed)
    return () => clearTimeout(timer)
  }, [text, deleting, index])


  return (
    <div className="home-section">
        <div className="home-container">
            <div className="content-container">
                <button className="hello-button"> Hello! </button>
                <h1 className="main-heading"> I'm <span className="main-heading-span"> Naga sai | </span> </h1>
                <h2 className="home-role">
                   I'm a <span className="span-home">{text}</span><span className="cursor">|</span>
                </h2>
                <p className="home-specialization">I specialize in building exceptional digital experiences  and creating  innovative solutions through modern web development.</p>
                <div>
                    <a href="https://drive.google.com/file/d/1xqj9bpfqckRgz-qL-mG62aIai6J4daJc/view?usp=drive_link" target="_blank"> <button className="home-button"> Download Resume</button> </a>
                    
                    <button className="home-button"> Know More</button>
                </div>
            </div>
            <div>
                <img src="https://res.cloudinary.com/dk9buau62/image/upload/v1743945500/WhatsApp_Image_2025-04-06_at_6.47.59_PM_khz6ym.jpg" className="image"/>
            </div>
            <SocialLinks />
        </div>
    </div>
  )
}

export default Home
