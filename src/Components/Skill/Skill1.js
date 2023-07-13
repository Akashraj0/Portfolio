import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import "./Skill.css"
const Skill1 = ({ skill, level }) => {
    return (
        <>
            <div className='skill-detail'>
                <span>
                    <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                <span>
                    <h4>{skill}</h4>
                    <p>{level}</p>
                </span>
            </div>
        </>
    )
}

export default Skill1;