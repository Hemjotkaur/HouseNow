import React from "react";
import "./HeroApartment.css";
import arrow from "../../assets/Vector (10).png";
import arrow1 from "../../assets/arrow-down.png";
import arrow2 from "../../assets/arrow2.png";
import search from "../../assets/Search.png";
import { useState } from "react";

const HeroApartment = () => {
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div className="hero-section">
      <div className="main-content">
        <div className="hero-main-heading">
          Find Real Estate <span>and</span> <br /> <span>Get</span> Your Dream
          Space
        </div>
        <div className="hero-title">10% Off on 3bhk Apartments</div>
        <div className="links">
          <button className="btn">
            Buy a Property{" "}
            <span>
              <img src={arrow} alt="" />
            </span>
          </button>
          <button className="btn">
            Rent a Property{" "}
            <span>
              <img src={arrow} alt="" />
            </span>
          </button>
          <button className="btn">
            Sale a Property{" "}
            <span>
              <img src={arrow} alt="" />
            </span>
          </button>
        </div>
      </div>
      <div className="search-panel-box">
        <div className="choice-box">
          Choice Location
          <span>
            <img src={arrow1} alt="" />
          </span>
        </div>
        <div className="bedroom-box">
          Bedrooms
          <span>
            <img src={arrow2} alt="" />
          </span>
        </div>
        <div className="bedroom-box">
          <span>
            <img src={arrow2} alt="" />
          </span>
        </div>
        <button className="search-btn">
          <span>
            <img src={search} alt="" />
          </span>
          Search
        </button>
      </div>
    </div>
  );
};

export default HeroApartment;
