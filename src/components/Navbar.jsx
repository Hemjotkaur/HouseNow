import React from 'react'
import './Navbar.css'
import hi from '../assets/hi.png'
import btnimg from "../assets/Fill 25.png";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav_logo">
            <img 
            className='nav_img'
            src={btnimg} 
            alt="" />
            <p className='nav_text'>HousNow</p>
      </div>
      <div className="nav_items">
            <div>
                Buy
            </div>
            <div>
                Sale
            </div>
            <div>
                Rent
            </div>
      </div>
      <button className="talk_btn">
        Say Hii,Don't be shy <span><img className='talk_img' src={hi} alt="" /></span>
      </button>
    </div>
  )
}

export default Navbar
