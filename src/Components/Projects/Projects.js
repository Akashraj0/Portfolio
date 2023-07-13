import React from "react";
import Card from "./Card";
import './Projects.css'

const project = [
  {
    getImageSrc: () => require('../Image/Rentalcar.jpg'),
    description1:"A car rental Website is an online platform that allow users to rent car for personal or business use The Website provides an interface for price comparison and reserving. ",
    heading:"car rental app",
    url:"https://akashraj0.github.io/CarRental/",
    url1:"https://github.com/Akashraj0/CarRental"
  },
  {
    getImageSrc: () => require("../Image/Little-Lemon.jpg"),
    description1:"Little Lemon Restuarant Website is used to order food online and reserve table for dinning for special occasion the menu has wide range of italian cuisine and user can easily add it to cart and order it",
    heading:"Restuarant App",
    url:"https://akashraj0.github.io/CarRental/",
    url1:"https://github.com/Akashraj0/CarRental"
  },
  {
    getImageSrc: () => require("../Image/Figma.jpg"),
    description1:"A High fedility Prototype is designed from wired frame to high fedelity prototype for Little Lemon Restuarant which holds the brand value and The user experience tested by prototyping.",
    heading:"UX/UI Design",
    url:"https://akashraj0.github.io/CarRental/",
    url1:"https://github.com/Akashraj0/CarRental"
  },
  {
    getImageSrc: () => require("../Image/Screenshot (89).png"),
    description1:"An responsive Task manager website Built using Chakra UI Component Library with React Framework.The whole application is built using Chakra UI Components.",
    heading:"Task Manager",
    url:"https://akashraj0.github.io/CarRental/",
    url1:"https://github.com/Akashraj0/CarRental"
  },
];

const Projects = () => {
  return (
    <div id="projects-section">
      <h1 className="project">Recent Works</h1>
      <div>
        <h1 className="project-head">Featured Projects</h1>
      </div>
      <div className="projects">
        {project.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            heading={project.heading}
            description1={project.description1}
            url={project.url}
            url1={project.url1}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;