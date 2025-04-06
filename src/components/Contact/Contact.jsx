import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GiLoveMystery } from "react-icons/gi"
import './Contact.css'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Message sent successfully! I’ll reach you back.')
    e.target.reset()
  }

  return (
    <div className='form'>
      <h1 className="contact-heading">Get In Touch</h1>
      <div className="contacts-container">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61194.52923532001!2d81.47494086329094!3d16.543350787320904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d2a6a86d3e4b%3A0x4eed21243d2dcfed!2sBhimavaram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1734596909340!5m2!1sen!2sin"
            className="map-image"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <form className='form-container' onSubmit={handleSubmit}>
          <label className="label">Name</label><br />
          <input className="input-label" type="text" required /><br />

          <label className="label">Email</label><br />
          <input className="input-label" type="email" required /><br />

          <label className="label">Password</label><br />
          <input className="input-label" type="password" required /><br />

          <button className="button" type="submit">Submit</button>
        </form>
      </div>

      <ToastContainer position="top-center" autoClose={3000} />

      <h4 className="footer"> Made with <GiLoveMystery className="foot-icon"/> by Naga sai </h4>
    </div>
  )
}

export default Contact

