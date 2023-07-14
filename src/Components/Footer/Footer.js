import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faSquareInstagram,faSquareTwitter} from "@fortawesome/free-brands-svg-icons";
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer-section'>
      <div className='footer'>
        <div>
          <h1 className='footer-head'>
            Akashraj P
          </h1>
        </div>
        <div className='navigate'>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Skill</a>
          <a href='/' >Projects</a>
          <a href='/'>Contact Me</a>
        </div>
        <div className='icon'>
        <a href="https://wa.me/7339227208"><FontAwesomeIcon className="font" icon={faSquareInstagram} size="2x"/></a>
        <a href="https://wa.me/7339227208"><FontAwesomeIcon className="font" icon={faSquareTwitter} size="2x" /></a> 
        <a href="https://wa.me/7339227208"><FontAwesomeIcon className="font" icon={faTelegram} size="2x" /></a>
        </div>
        <div className='footer-end'>
          <h1>©Akashraj.All Rights reserved</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer