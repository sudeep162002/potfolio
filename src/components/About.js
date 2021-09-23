import React from "react";
import Roll from 'react-reveal/Roll';
import HeadShake from 'react-reveal/HeadShake';
import Jello from 'react-reveal/Jello';
import RubberBand from 'react-reveal/RubberBand';
import Slide from 'react-reveal/Slide';

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "I am a hard-working person with 1-year of experience in web dev. I know multiple programing languages.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Sudeep Choudhary" },
    { id: 2, title: "Email:", text: "sudeep162002@gmail.com" },
    { id: 3, title: "Phone:", text: "+918602161277" },
    { id: 4, title: "Linkedin", text: "https://www.linkedin.com/in/sudeep-choudhary-103017203/" },
  ]);
  return (
    <div className="about" >
      <div className="container">
        <div className="common">
        <Roll left>
          <h1 className="mainHeader">{header.subHeader}</h1>
          </Roll>
          <HeadShake>
          <p className="mainContent">{header.text}</p>
          </HeadShake>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
          
            <div className="about__img">
            <Slide left>
              <img src="/images/man-01.png" alt="man" />
              </Slide>
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
            <Jello>
              <h1>Hi There</h1>
              </Jello>
              <div className="about__info-p1">
              <Slide right>
              A Web developer with a keen interest in creating Full Stack Web applications. Good grasp over technologies like HTML, CSS, ReactJS, Bootstrap, ExpressJS, MongoDB and NodeJS. A computer science enthusiast having programming experience in languages like C++, JavaScript. Strong grab on communication Skills.
                </Slide>
              </div>
              <div className="about__info-p2">
              <Slide right>
              Apart from that, I am also a bug bounty hunter at HackerOne and bug crowd, experienced in ethical domain testing.
                </Slide>
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <Slide bottom>
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                      </Slide>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
