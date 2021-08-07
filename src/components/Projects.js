import React from "react";
import Wobble from 'react-reveal/Wobble';
import Flip from 'react-reveal/Flip';
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar,
} from "react-icons/fa";
const Projects = () => {
  const [header] = React.useState({
    mainHeader: "PROJECTS",
    subHeading: "My Projects",
    text:
      "These are my project which I made over time it. I use multiple technologies like React , Node.js , express.js",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "POTFOLLIO-WEBSITE",
      text:
        "It's this website. It has react frontend and node js backend.",
      link:"https://www.facebook.com/sudeep.choudhary.5036",

      
    },
    {
      id: 2,
      icon: <FaGithub className="commonIcons" />,
      heading: "NETFLIX-CLONE",
      text:
        "This is a clone website of Netflix. it has backend of firebase and frontend of react and hosted on firebase",
        
    },
    {
      id: 3,
      icon: <FaGithub className="commonIcons" />,
      heading: "ZOOM-CLONE",
      text:
        "IT is a backend project with nodejs and express engine . On this website I created a video calling app",
        
    },
    {
      id: 4,
      icon: <FaGithub className="commonIcons" />,
      heading: "TSHIRT-SELLER-WEB",
      text:
        "its an javascript website with HTML and CSS frontend",
        
    },
    {
      id: 5,
      icon: <FaGithub className="commonIcons" />,
      heading: "TO-DO-LIST",
      text:
        "its an javascript website with HTML and CSS frontend",
        
    },
    {
      id: 6,
      icon: <FaGithub className="commonIcons" />,
      heading: "LANDING-PAGE",
      text:
        "its an javascript website with HTML and CSS frontend",
        
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <Wobble>
            <h1 className="mainHeader">{header.subHeading}</h1>
            </Wobble>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                <Flip left>
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                  <div className="project_button" onClick={() => window.open( 'https://github.com/sudeep162002')}>visit</div>
                  </Flip>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
