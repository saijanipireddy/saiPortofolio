import React from 'react'
import './Projects.css'

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      title: 'Jobby App',
      description: 'Developed a comprehensive job search solution, Jobby App',
      technologies: ['React.js', 'Express.js', 'Bootstrap', 'HTML', 'CSS'],
      live: 'https://janipireddy.ccbp.tech/',
      imageUrl: 'https://res.cloudinary.com/dk9buau62/image/upload/v1743864470/Screenshot_33_qb84ds.png',
      credentials: 'username: rahul / password: rahul@2021',
    },
    {
      id: 2,
      title: 'Ecommerce Application',
      description: 'Rolled out an innovative e-commerce platform patterned after Amazon and Flipkart.',
      technologies: ['HTML', 'CSS', 'JS', 'React','Bootstrap'],
      live: 'https://saikumarsahi.ccbp.tech/',
      imageUrl: 'https://res.cloudinary.com/dk9buau62/image/upload/v1743864724/Screenshot_34_dmu0tg.png',
      credentials: 'username: rahul / password: rahul@2021', // Updated image path
    },
    {
      id: 3,
      title: 'Food Delivery Website',
      description: 'Project: Food Delivery Website (Similar to Zomato/Swiggy)',
      technologies: ['ReactJs', 'Nodejs', 'Expressjs', 'Bootstrap', 'MongoDb'],
      live: 'https://fullstack-app-frontend-hkfc.onrender.com/',
      imageUrl: 'https://res.cloudinary.com/dk9buau62/image/upload/v1743864866/Screenshot_35_fmd7mz.png'
    },
    {
      id: 4,
      title: 'Screen Recorder',
      description: 'I built a Screen Recorder Application',
      technologies: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Websockets'],
      live: 'https://saiscreening.ccbp.tech',
      imageUrl: 'https://res.cloudinary.com/dk9buau62/image/upload/v1743868537/Screenshot_36_utkiib.png'
    },
    {
      id: 5,
      title: 'SPotify Clone',
      description: 'I built a Spotify clone app',
      technologies: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Reactjs','Nodejs','Expressjs','MongoDB'],
      live: 'https://sai-spotify-frontend.onrender.com/',
      backendUrl: 'https://sai-spotify-backend.onrender.com/',
      imageUrl: 'https://res.cloudinary.com/dk9buau62/image/upload/v1743869050/Screenshot_37_zeunvi.png',
    },
    {
      id: 6,
      title: 'College Website',
      description: 'I built a College Website',
      technologies: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
      live: 'https://saisahi.netlify.app/',
      imageUrl: 'https://res.cloudinary.com/dk9buau62/image/upload/v1743869633/Screenshot_38_i7cuca.png'
    }
  ]
  return (
    <div className="projects">
      <h1 className="projects-heading"> Projects </h1>
      <ul className="project-list-container">
        {projectsList.map((project,index) => (
          <div className="project-container" key={project.id}>
            <img src={project.imageUrl} className="project-image" />
            <div className="project-content">
            <h1 className="project-title"> {project.title} </h1>
            <p>{project.description} </p>
            <div>
              {project.technologies.map(tech => (
                <button className="project-button"> {tech} </button>
              ))}
            </div>
             <a href={project.live} target="_blank"><button className="view-live"> View Project </button></a>
             {project.backendUrl && <a href="https://sai-spotify-backend.onrender.com" target="_blank"> <button className="view-live"> Run Backend </button></a>} 
             <p>{project.credentials}</p>
          </div>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Projects
