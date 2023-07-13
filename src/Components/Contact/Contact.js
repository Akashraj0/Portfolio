import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faWhatsapp,faTelegram} from "@fortawesome/free-brands-svg-icons";

import React from 'react'
import './Contact.css'
const data=[
    {
        icon:faEnvelope,
        url: "mailto: akashperumalraj0@gmail.com",
        description: "Email",
        text: "email me"
    },
    {
        icon:faWhatsapp,
        url: "https://wa.me/7339227208",
        description: "WhatsApp",
        text: "what's up"
    },
    {
        icon:faTelegram,
        url: "t.me/Akashraj01",
        description: "Telegram",
        text: "Let's chat"
    }
]
const Contact = () => {
  return (
    <>
    <h1 className="contact-heading1" id="contactme-section">Let's Talk</h1>
    <h1  className='contact-heading'>Contact Me</h1>
    <div className='contact'>
        <div className='c-box'>
            {data.map((social)=>(
                 <div className="box">
                      <FontAwesomeIcon className="icon" icon={social.icon} size="2x"/>
                      <h5 className="h-c">{social.description}</h5>
                      <a className="sentence"  style={{color:"black",fontWeight:"bold",fontSize:"12px"}} href={social.url}>{social.text}</a>
                </div>
            ))}
        </div>
        <div className='c-box1'>
            <form className="form" netify>
                <div className='label'>
                    <input type='name' placeholder='Enter your Name'></input>
                </div>
                <div className='label'>
                    <input type='email' placeholder='Enter your email'></input>
                </div>
                <div className='label1'>
                    <textarea placeholder='share your thoughts' rows={7} cols={29}></textarea>
                </div>
                <div className='label-button'>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact