import React from 'react';
import './Skill.css';
import Skill from './Skill';
import Skill1 from './Skill1';
const data = [
    {
        skill: "React Js",
        Level: "Intermidiate"

    },
    {
        skill: "JavaScript",
        Level: "Intermidiate"
    },
    {
        skill: "HTML",
        Level: "Advanced"
    },
    {
        skill: "CSS",
        Level: "Advanced"
    },
    {
        skill: "Bootstrap",
        Level: "Beginner"
    },
    {
        skill: "ChakraUI",
        Level: "Intermidiate"
    },
    {
        skill: "Figma",
        Level: "Intermidiate"
    },
];
const data1 = [
    {
        skill: "C++",
        Level: "Intermidiate"

    },
    {
        skill:"Python",
        Level: "Intermidiate"
    },
    {
        skill: "Data Structure",
        Level: "Beginner"
    },
    {
        skill: "Data Science",
        Level: "Intermidiate"
    },
    {
        skill: "Arduino",
        Level: "Intermidiate"
    },
    {
        skill: "MATLAB",
        Level: "Intermidiate"
    },
    {
        skill: "GitHub",
        Level: "Intermidiate"
    }
];
const SkillCard = () => {
    return (
        <div>
            <div className='skill-section'>
                <h5 className='skill-heading'>Questioning My abality?</h5>
                <div className='skill-heading1'>
                    <h1>My Skills</h1>
                </div>
                <div className='Skills'>
                <div className='skill-box1'>
                    <h1 className='skill-heading'>Front-End Development</h1>
                    <div className='skill-flex'>
                {data.map((S) => (
                    <Skill
                        key={S.skill}
                        skill={S.skill}
                        level={S.Level}
                    />
                ))}
            </div>
            </div>
            <div className='skill-box2'>
                <h1 className='skill-heading'>Other Skills</h1>
                <div className='skill-flex'>
                {data1.map((S1) => (
                    <Skill1
                        key={S1.skill}
                        skill={S1.skill}
                        level={S1.Level}
                    />
                ))}
            </div>
            </div>
            </div>
        </div>
        </div>
  )
}

export default SkillCard;