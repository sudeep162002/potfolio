import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

import About from "./components/About";
import Prices from "./components/ContactForm";
import Contact from "./components/Footer";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
      <Banner />
      <Nav />
      
      <About />
      <Projects />
      <ContactForm/>
      <Contact />
    </div>
  );
}

export default App;
