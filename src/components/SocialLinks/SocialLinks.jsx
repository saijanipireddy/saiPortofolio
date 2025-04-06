import { FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa'
import './SocialLinks.css'

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/naga-sai-kumar-janipireddy/" target="_blank" rel="noreferrer">
        <FaLinkedin className="soc-icon" size={30} />
      </a>
      <a href="https://www.youtube.com/@nagasaijanipireddy" target="_blank" rel="noreferrer">
        <FaYoutube className="soc-icon" size={30}/>
      </a>
      <a href="https://github.com/saijanipireddy" target="_blank" rel="noreferrer">
        <FaGithub className="soc-icon" size={30} />
      </a>
    </div>
  )
}

export default SocialLinks