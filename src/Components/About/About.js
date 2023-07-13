import './About.css';
import { Avatar} from "@chakra-ui/react";
import photo from './photo1.jpg'
import React from 'react'
const greeting = "Hello, I am Akashraj!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const About = () => {
    return (
        <>
            <div className="about">
                <div className='about-content'>
                    <Avatar name="akashraj" src={photo} size='2xl'></Avatar>
                    <div>
                    <h2 className='heading'>{greeting}</h2>
                    </div>
                    <div>
                    <h1 className='heading1'>
                        {bio1}
                    </h1>
                    </div>
                    <div>
                        <h1 className='heading1'>
                        {bio2}
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About