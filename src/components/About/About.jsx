import React from 'react'
import { ChevronRight,CodeXml } from "lucide-react";
import './About.css'




const About = () => {
  return (
    <div className="about">
       <h1 className="about-heading"> About Me </h1>
       <div className='outer-card-container'>
          <div className='inner-card-container'>
               <div className="card-content">
               <ChevronRight size={40} className="arrow-icon"/>
               <h3>Hi, I'm a final-year Electrical & Electronics student passionate about building innovative tech solutions. With expertise in competitive programming (Python,Javascript), full-stack development (React, Node.js, Express, SQL), and AI-driven applications, I thrive on solving complex problems and creating impactful digital experiences.</h3>
               </div>

               <div className="card-content">
               <ChevronRight size={30} className="arrow-icon"/>
               <h3>Currently, I working as a Full stack Developer, where I develop and maintain Web Applications. My work involves building responsive UI components, integrating APIs, optimizing performance, and ensuring a smooth user experienc</h3>
               </div>

               <div className="card-content">
               <ChevronRight size={30} className="arrow-icon"/>
               <h3>My projects range from web development (React), machine learning (CNNs, image classification), and backend systems, including a spotify clone application and an AI-powered job search agent.</h3>
               </div>
            </div>
           

           <div className="about-inner-card-container">
              <div className="card-container">
                    <div className="about-card-content"> 
                         <CodeXml size={48} className="dev-icon" />
                        <h2> Fullstack Development </h2>
                        <p> Building responsive and interactive web applications using modern frontend Technologies & Backend Technologies. </p>
                    </div>
              </div>
              <div className="card-container">
                    <div className="about-card-content"> 
                         <CodeXml size={48} className="dev-icon" />
                        <h2> Frontend Development </h2>
                        <p> Building responsive and interactive web applications using modern frameworks and technologies. </p>
                    </div>
              </div>

              <div className="card-container">
                    <div className="about-card-content"> 
                         <CodeXml size={48} className="dev-icon" />
                        <h2> Backend Development </h2>
                        <p> Building responsive and interactive web applications using modern Backend frameworks and technologies. </p>
                    </div>
              </div> 
              
           </div> 
         </div>
    </div>
  )
}

export default About


