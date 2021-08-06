import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaLinkedin,
  FaPlay,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <img src="/images/logo.png" alt="" />
              </div>
              <p>
                Thanks for visiting my website if you like this website. Please contact me or mail me for any advice.thankyou once again. viel Glück
              </p>
              <ul className="contactCircles">
                <li>
                  <FaFacebookF className="contactIcon" />
                </li>
                <li>
                  <FaTwitter className="contactIcon" />
                </li>
                <li>
                  <FaLinkedin className="contactIcon" />
                </li>
                <li>
                  <FaInstagram className="contactIcon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
