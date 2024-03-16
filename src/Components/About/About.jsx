import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import Project from '../Project/Project';
import "./About.css";

const About = () => {
  return (
    <>
      <div className="content">
        <div className="left">
          <p>Hello, my name is <span>Shagufta Afrin</span>, a Frontend Developer and Illustrator.</p>
          <Link to="/contact"><button>Contact me</button></Link>
          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://www.facebook.com/yourfacebookprofile" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/shagufta-afrin-047421298/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
        <div className="right">
          <img src="./images/afrii.png" alt="Afrin" />
        </div>
      </div>
      <Services />
      <Project />
    </>
  );
}

export default About;
