import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/Consultant.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" id="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" className="As" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Service that speaks volumes.
        </h1>
        <p className="primary-text">
        Every interaction is an opportunity to exceed expectations and make a positive impact.
        </p>
        <p className="primary-text">
        Our motive is to provide the right product to problem at right time
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button"><a href="#work-section-wrapper"></a>Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
