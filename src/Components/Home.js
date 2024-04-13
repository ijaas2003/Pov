import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BG from '../Assets/girl.png';
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container" id="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" className="img" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          The only way to do great work is to love what you do
          </h1>
          <p className="primary-text">
          The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.
          </p>
          <button className="secondary-button">
            <a href="#about-section-container" className="anc">Walk ON</a>  <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BG} alt=""  className="img2"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
