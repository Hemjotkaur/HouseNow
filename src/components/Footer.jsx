import React from "react";
import "./Footer.css";
import twitter from "../assets/Twitter.png";
import fb from "../assets/Facebook.png";
import linkdn from "../assets/Linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main_footer_content">
        <div className="first_item">
          <div className="first_div">
            <div className="first_div_heading this_1">sell your home</div>
            <div className="items">
              <ul>
                <li>Request an offer</li>
                <li>How ot works</li>
                <li>Pricing</li>
                <li>Reviews</li>
                <li>Stories</li>
              </ul>
            </div>
          </div>
          <div className="home_div">
            <div className="first_div_heading">buy a home</div>
            <div className="items">
              <ul>
                <li>Buy</li>
                <li>Tour Homes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="second_item">
          <div className="first_div">
            <div className="first_div_heading this_2">trade-in your home</div>
            <div className="items">
              <ul>
                <li>Oval Trade-in</li>
                <li>Builder Trade-up</li>
              </ul>
            </div>
          </div>
          <div className="home_div agent">
            <div className="first_div_heading">agents</div>
            <div className="items">
              <ul>
                <li>Make an offer</li>
                <li>Request an offer</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="first_item">
          <div className="first_div">
            <div className="first_div_heading">about</div>
            <div className="items">
              <ul>
                <li>Company</li>
                <li>Career</li>
                <li>Press</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="third_item">
          <div className="first_div">
            <div className="first_div_heading">resources</div>
            <div className="items">
              <ul>
                <li>Blog</li>
                <li>Guides</li>
                <li>FAQ</li>
                <li>Help Center</li>
              </ul>
            </div>
          </div>
          <div className="social_links">
            <div className="first_div_heading">social media</div>
            <div className="item_social">
              <ul>
                <li>
                  <img src={twitter} alt="" />
                </li>
                <li>
                  <img src={fb} alt="" />
                </li>
                <li>
                  <img src={linkdn} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_line"></div>

      <div className="footer-bottom">
        <span>© 2021 Oval</span>
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
        <span>Trust & Safety</span>
        <span>Law Enforcement</span>
        <span className="language">
          Language :
          <select>
            <option>EN</option>
          </select>
        </span>
      </div>
    </div>
  );
};

export default Footer;
