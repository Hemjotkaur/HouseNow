import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import arrow from '../assets/Vector (10).png'
import aboutimg from '../assets/aboutimg.png'

const About = () => {
  return (
     <div className="about_section">
        <div className="left_content">
            <div className="title_heading">about us</div>
         <div className="banner_title">
         Empowering Seamless Real <br /> Estate Transactions with <br />HouseNow
     </div>
         <div className="lower_content">
           <div className="content_text">
              At HouseNow, we revolutionize the way you buy and rent homes, bringing together cutting-edge technology and unparalleled convenience. Our platform is designed to simplify the entire process, from browsing and inquiries to secure transactions and contract signing. With a commitment to innovation and user-centric solutions, we aim to make your home acquisition experience effortless, transparent, and rewarding. Welcome to a new era of real estate with HouseNow.
           </div>
          
         </div>
         <div className="properties_btn">
               <button className="contact_btn">
                        Contact Us  <span><img src={arrow} alt="" /></span>
               </button>
         </div>
        </div>
          <div className="main_img">
              <img src={aboutimg} alt="" />
           </div>
       </div>
  )
}

export default About
