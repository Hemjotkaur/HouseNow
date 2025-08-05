import React from "react";
import "./Hero.css";
import arrow from '../assets/Vector (10).png'

const Hero = () => {
  return (
    <div className="hero_section">
      <div className="content">
        <div className="main_heading">
          HOUS<span>N</span>OW
        </div>
        <div className="lower_text">let's grow together</div>
      </div>
      <div className="links">
        <button className="btn">
            Buy a Property  <span><img src={arrow} alt="" /></span>
        </button>
         <button className="btn">
            Buy a Property  <span><img src={arrow} alt="" /></span>
        </button>
         <button className="btn">
            Buy a Property  <span><img src={arrow} alt="" /></span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
