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
      "Lorem Ipsum is simply dummy text of the printing and typesetting\
    industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
      industry. simply dummy",
    },
    {
      id: 2,
      icon: <FaCamera className="commonIcons" />,
      heading: "Photography",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Web Desing",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 4,
      icon: <FaApple className="commonIcons" />,
      heading: "App Devlopment",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 5,
      icon: <FaFileVideo className="commonIcons" />,
      heading: "Video Editing",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 6,
      icon: <FaSearchDollar className="commonIcons" />,
      heading: "SEO Expert",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
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
