import React from 'react'
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import './DropdownButton.css'

const DropdownButton = ({ user, open, toggle }) => {
  return (
    <div>
      <div 
        onClick={toggle}
        className={`dropdown_btn ${open ? "button-open" : null}`}>
            <img src={user.userImage} alt="user" />
            <div className="dropdown_username">
                Hi! <span>{user.username}</span>
            </div>
            <span className='down_arrow toggle-icon'>
              {open ? <FaChevronUp /> : <FaChevronDown/>}
            </span>
      </div>
    </div>
  )
}

export default DropdownButton
