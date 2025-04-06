import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <div className="experience">
      <h1 className="exp-name"> Experience </h1>
    <div className="exp-slides">
      <div className="exp-container">
         <div className="exp-image-container">
             <img src="https://images.cnbctv18.com/wp-content/uploads/2021/11/Coimbatore_-8.jpg" className="experience-image" />
            </div>
        <div className="exp-content">  
            <h1> Alstom (Trainee) </h1>
            <p>Conducted functional testing of metro trains, ensuring all doors operated simultaneously and safely.
                Validated cabin switches, sensors, and control systems for optimal performance.
                Tested pantograph (panto) operations, ensuring successful 25kV power supply reception.
                Utilized specialized software to diagnose and troubleshoot electrical and mechanical issues.
                Collaborated with cross-functional teams to enhance train performance and safety compliance.
            </p>
          </div>
         </div>

         <div className="exp-container">
            <div className="exp-content">  
                <h1> Medha Servo Drives (Intern) </h1>
                <p>Utilized DAS (Data Analysis Software) to analyze locomotive performance and diagnose faults.
                    Provided real-time troubleshooting support, guiding teams to resolve issues efficiently.
                    Managed software updates by deploying and validating new software in locomotives.
                    Ensured optimal locomotive performance by verifying software functionality post-deployment.
                </p>
             </div>
             <div className="exp-image-container">
             <img src="https://www.teluguone.com/teluguoneUserFiles/28IN_MEDHA_28097f(1).jpg" className="experience-image" />
            </div>
         </div>

      </div>
    </div>
  )
}

export default Experience
