import React from "react";
import Card from "./Card";
import './Projects.css'

const project = [
  {
    getImageSrc: () => require("../Image/Rate.png"),
    description1:"This Online platform build using react. This platform Provides data of currency exchange rate.This application fetches data from API and gives current exchange price, It also as a feature of converting currency value and graph to analyze value difference .",
    heading:"RateX",
    url:"https://ratex0.netlify.app/",
    url1:"https://github.com/Akashraj0/RateX.git"
  },
  {
    getImageSrc: () => require("../Image/Netflix.png"),
    description1:"Netflix Clone is streaming platform which has wide variety movies in different genres and it also have user authentication using firebase and the movies are fetched from tmtb database using axios.",
    heading:"Netflix Clone",
    url:"https://netflix-clone-73973.web.app/",
    url1:"https://github.com/Akashraj0/Netflix-Clone.git"
  },
  {
    getImageSrc: () => require('../Image/Rentalcar.jpg'),
    description1:"A car rental Website is an online platform that allow users to rent car for personal or business use The Website provides an interface for price comparison and reserving. ",
    heading:"car rental app",
    url:"https://akashraj0.github.io/CarRental/",
    url1:"https://github.com/Akashraj0/CarRental"
  },
  {
    getImageSrc: () => require("../Image/Screenshot (89).png"),
    description1:"An responsive Task manager website Built using Chakra UI Component Library with React Framework.The whole application is built using Chakra UI Components.",
    heading:"Task Manager",
    url:"https://taskmanager5.netlify.app/",
    url1:"https://github.com/Akashraj0/Task-Manager.git"
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