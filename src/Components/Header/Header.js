import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useRef} from "react";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import './Header.css'
import React from 'react'

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];


const Header = () => {
  const projects = useRef("projects")
  const contactme = useRef("contactme")
  const handleClick = (anchor) =>{
    const id=`${anchor}-section`;
    const element = document.getElementById(id);
    console.log(projects.current)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      }
  }
  return (
    <>
          <nav className="navbar">
            <span className="left">
              <ul>
                {socials.map((social) => (
                  <a href={social.url}><FontAwesomeIcon icon={social.icon} size="2x" /></a>
                ))}
              </ul>
            </span>

            <span className="right">
              <ul>
                <a href="/#projects" onClick={()=>{handleClick(projects.current)}}>Projects</a>
                <a href="/#contactme" onClick={()=>{handleClick(contactme.current)}}>Contact Me</a>
              </ul>
            </span>

          </nav>
      </>
  )
}

export default Header;

