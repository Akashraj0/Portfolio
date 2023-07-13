import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './Projects.css'
const Card = ({ title,imageSrc ,heading ,description1,url,url1 }) => {
  const comment1='Git Hub';
  const comment='Live Demo';
    return (
      <>
       <div className="card">
       <div className="card1">
       <img src={imageSrc} alt="project-img" width={"100%"}/>
       </div>
       <div className="card2">
        <div className="cardout">
          <h1 style={{textAlign:"center",fontSize:"20px",color:"white",fontWeight:"bold"}}>{heading}</h1>
          <p style={{margin:"20px",textAlign:"justify"}}>{description1}</p>
        </div>
       <div className="cardin">
       <a  href={url1} style={{margin:"20px",textAlign:"justify",color:"white"}}>{comment1} <FontAwesomeIcon icon={faArrowRight} size="1x" /></a>
       <a href={url} to='url' style={{margin:"20px",textAlign:"justify",color:"white"}}>{comment} <FontAwesomeIcon icon={faArrowRight} size="1x" /></a>
       </div>
       </div>
       </div>
      </>
    );
};

export default Card;
