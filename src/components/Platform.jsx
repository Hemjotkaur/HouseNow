import React from "react";
import "./Platform.css";
import boximg from '../assets/box.png'
import arrow from '../assets/Vector (10).png'

const Platform = () => {
  return (
    <div className="platform_section">
      <div className="heading">Advance Real estate Platform</div>
      <div className="banner_heading">
        Unveiling the World's Most Advanced Real Estate Platform
      </div>
      <div className="lower_content">
        <div className="content_details">
          Your Instant Gateway to Dream Homes. Explore, Inquire, Bid, and
          Secure. Connecting you to the Perfect Property Match, Hassle-Free.
          Your Key to Unlocking a New Chapter in Home Ownership. Your Instant
          Gateway to Dream Homes. Explore, Inquire, Bid, and Secure. Connecting
          you to the Perfect Property Match, Hassle-Free. Your Key to Unlocking
          a New Chapter in Home Ownership.
        </div>
        <div className="grid_box">
          <div className="box">
            <div className="box_img">
              <img src={boximg} alt="" />
            </div>
            <div className="title">View Listing</div>
          </div>
            <div className="box">
            <div className="box_img">
              <img src={boximg} alt="" />
            </div>
            <div className="title">Auction</div>
          </div>
            <div className="box">
            <div className="box_img">
              <img src={boximg} alt="" />
            </div>
            <div className="title">Contract</div>
          </div>
            <div className="box">
            <div className="box_img">
              <img src={boximg} alt="" />
            </div>
            <div className="title">But Home</div>
          </div>
        </div>
      </div>
      <div className="properties_btn">
            <button className="btn">
                      View Properties  <span><img src={arrow} alt="" /></span>
            </button>
      </div>
    </div>
  );
};

export default Platform;
