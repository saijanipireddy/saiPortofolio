import React from 'react'
import './Skills.css'
import { DiHtml5 } from "react-icons/di";
import { SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { TbBrandMongodb } from "react-icons/tb";
import { AiOutlinePython } from "react-icons/ai";
import { MdOutlineJavascript } from "react-icons/md";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";


const Skills = () => {
  return (
    <div className="skills">
        <h1 className="skills-heading-name"> Skills </h1>
    <div className="skills-cards">
      <div className="skills-outer-card-container">
          <h1 className="skills-name"> Frontend  </h1>
        <div className="sub-cards-container">
            <div className="sub-card">
                  <DiHtml5 size={40} className="skills-image" />
                  <h3> HTML5</h3>
               </div>
            <div className="sub-card">
                <SiCss3 size={40} className="skills-image" />
                <h3> CSS3 </h3>
              </div>
            <div className="sub-card">
                <FaReact size={40} className="skills-image" />
                <h3> ReactJS</h3>
             </div>
            <div className="sub-card">
                <FaBootstrap size={40} className="skills-image" />
                <h3>Bootstrap</h3>
            </div>
         </div>
      </div>

      <div className="skills-outer-card-container">
          <h1 className="skills-name"> Backend / DataBase </h1>
        <div className="sub-cards-container">
            <div className="sub-card">
                  <FaNodeJs size={40} className="skills-image" />
                  <h3> NodeJs </h3>
               </div>
            <div className="sub-card">
                <SiExpress size={40} className="skills-image" />
                <h3> ExpressJS </h3>
              </div>
            <div className="sub-card">
                <TbSql size={40} className="skills-image" />
                <h3> SQL </h3>
             </div>
            <div className="sub-card">
                <TbBrandMongodb size={40} className="skills-image" />
                <h3> MongoDB</h3>
            </div>
         </div>
      </div>

      <div className="skills-outer-card-container">
          <h1 className="skills-name"> Languages </h1>
        <div className="sub-cards-container">
            <div className="sub-card">
                  <AiOutlinePython size={40} className="skills-image" />
                  <h3> Python </h3>
               </div>
            <div className="sub-card">
                <MdOutlineJavascript size={40} className="skills-image" />
                <h3> Javascript </h3>
              </div>
            <div className="sub-card">
                <SiNumpy  size={40} className="skills-image" />
                <h3> Numpy </h3>
             </div>
            <div className="sub-card">
                <SiPandas size={40} className="skills-image" />
                <h3>Pandas </h3>
            </div>
         </div>
      </div>

    </div> 
  </div>
  )
}

export default Skills
