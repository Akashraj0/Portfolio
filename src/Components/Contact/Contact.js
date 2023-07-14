import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'
const data = [
    {
        icon: faEnvelope,
        url: "mailto: akashperumalraj0@gmail.com",
        description: "Email",
        text: "email me"
    },
    {
        icon: faWhatsapp,
        url: "https://wa.me/7339227208",
        description: "WhatsApp",
        text: "what's up"
    },
    {
        icon: faTelegram,
        url: "t.me/Akashraj01",
        description: "Telegram",
        text: "Let's chat"
    }
]
const Contact = () => {
    const [state, handleSubmit] = useForm("mbjvjejy");
    if (state.succeeded) {
        return <div className="reply"><p>I appreciate your feedback!</p></div>
    }
    return (
        <>
            <h1 className="contact-heading1" id="contactme-section">Let's Talk</h1>
            <h1 className='contact-heading'>Contact Me</h1>
            <div className='contact'>
                <div className='c-box'>
                    {data.map((social) => (
                        <div className="box">
                            <FontAwesomeIcon className="icon" icon={social.icon} size="2x" />
                            <h5 className="h-c">{social.description}</h5>
                            <a className="sentence" style={{ color: "black", fontWeight: "bold", fontSize: "12px" }} href={social.url}>{social.text}</a>
                        </div>
                    ))}
                </div>
                <div className='c-box1'>
                    <form action="https://formspree.io/f/mbjvjejy" method="POST"onSubmit={handleSubmit} className="form">
                        <div className='label'>
                        <input
                            id="name"
                            type="name"
                            name="name"
                            placeholder='Enter your Name'
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                        </div>
                        <div className='label'>
                        <input
                            placeholder='Enter your email'
                            id="email"
                            type="email"
                            name="email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        </div>
                        <div className='label1'>
                        <textarea
                            id="message"
                            name="message"
                            rows={7}
                            placeholder='share your thoughts'
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        </div>
                        <div className='label-button'>
                        <button type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                        </div>
                    </form>
                    {/* <form className="form">
                        <div className='label'>
                            <input type='name' placeholder='Enter your Name' value={name}></input>
                        </div>
                        <div className='label'>
                            <input type='email' placeholder='Enter your email' nvalue={email}></input>
                        </div>
                        <div className='label1'>
                            <textarea placeholder='share your thoughts' rows={7} value={comment}></textarea>
                        </div>
                        <div className='label-button'>
                            <button>Submit</button>
                        </div>
                    </form> */}
                </div>
            </div>
        </>
    )
}

export default Contact