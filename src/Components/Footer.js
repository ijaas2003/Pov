import React from "react";
import Logo from "../Assets/L.png";
import { SiLinkedin } from "react-icons/si";
import { FiArrowRight } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="footer-wrapper" id="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <button className="secondary-button">
          Connect via LinkedIN
          <FiArrowRight />
          <a href="https://www.linkedin.com/company/pov-solution/"><SiLinkedin /></a>
          </button>
          
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>8270596315</span>
          <span>pov-solution@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
