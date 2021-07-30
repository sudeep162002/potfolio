import React from "react";

import  { useState, useEffect } from 'react';
import { FaAlignJustify } from "react-icons/fa";
const Nav = () => {
  const [state, setState] = React.useState(true);

  function scrollAbout() {
    window.scrollTo(0, 1000)
  } 
  function scrollHome() {
    window.scrollTo(0,0)
  } 
  function project() {
    window.scrollTo(0, 1800)
  } 
  function Contact() {
    window.scrollTo(0, 2700)
  } 
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src="/images/logo.png" alt="logo" />
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              
              <li>
              <a onClick={()=>scrollHome ()}>Home</a>
              </li>
              <li>
                <a  onClick={()=>scrollAbout()}>About me</a>
              </li>
              <li>
                <a onClick={()=>project()}>Projects</a>
              </li>
              <li>
                <a onClick={()=>Contact()}>Contact me</a>
              </li>
              
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;
