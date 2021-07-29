import React from "react";
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';

import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaLinkedin,
  FaPlay,
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "I am Sudeep Choudhary",
    text:
      "i,m Sudeep, professional web developer with long time \
    experience in this field​",
    image: "/images/man-01.png",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
            
              <div className="header__section">
              <Slide top>

                <ul className="header__ul">
                  <li>
                    <FaFacebookF className="headerIcon" />
                  </li>
                  <li>
                    <FaTwitter className="headerIcon" />
                  </li>
                  <li>
                    <FaLinkedin className="headerIcon"  />
                  </li>
                  <li>
                    <FaInstagram className="headerIcon" />
                  </li>
                </ul>
                </Slide>
                <Slide left>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                </Slide>
                <div className="header__buttons">
                <Bounce>
                  <a href="" className="btn btn-outline">
                    My Portfolio
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  </Bounce>
                </div>
              </div>
            </div>
              
          </div>
          <div className="col-6">
            <div className="banner__img">
            <Bounce right>
              <img src={state.image} alt="man" />
              </Bounce>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
