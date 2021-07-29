import React from "react";
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';
import Flash from 'react-reveal/Flash';


const ContactForm = () => {
  return (
    <div className="ContactForm">
      <div className="contact-box">
			
			<div className="right">
			<Flash>
				<h2>Contact Us</h2>
				</Flash>
				<Slide left>
				<input type="text" className="field" placeholder="Your Name"></input>
				</Slide>
				<Slide right>
				<input type="text" className="field" placeholder="Your Email"></input>
				</Slide>
				<Slide left>
				<input type="text" className="field" placeholder="Phone"></input>
				</Slide>
				<Slide right>
				<textarea placeholder="Message" className="field"></textarea>
				</Slide>
				<Slide bottom>
				<Roll bottom>
				<button className="btn">Send</button>
				</Roll>
				</Slide>
			</div>
      </div>
      </div>
      
		
  );
};

export default ContactForm;
