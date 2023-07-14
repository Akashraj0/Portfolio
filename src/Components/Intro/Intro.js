import React from 'react'
import './Intro.css'
const Intro = () => {
    return (
        <div className='intro'>
            <h5 className='intro-head'>Get To Know</h5>
            <h4 className='intro-head1'>About Me</h4>
            <p className='intro-para'>HI!, I'm a Front-End Developer located in India, A Passinated programmer
                <img src={require("./programmer.png")} alt='programmer' style={{ display: "inline" }} />
                who enjoys acquiring new Knowledge and using the skill to develop new things and a team player.
                Interested in technologies and research. hobbies playing chess, surfing youtube,and playing basketball.</p>
        </div>
    )
}

export default Intro