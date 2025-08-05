import React from 'react'
import './DropdownItem.css'

const DropdownItem = ({ onClick}) => {
  return (
    <div
      className="dropdown-item"
      onClick= {onClick}>
       <div className="first-item-value">
            My Account
       </div>
      <div className="line"></div>
       <div className="second-item-value">
            My listed Properties
       </div>
      <div className="line"></div>
        <div className="third-item-value">
            My Properties
       </div>
      <div className="line"></div>
        <div className="fourth-item-value">
            Auction
       </div>
      <div className="line"></div>
       <div className="fifth-item-value">
            Contracts
       </div>
      <div className="line"></div>
       <div className="sixth-item-value">
            Mortgage Calculator
       </div>
      <div className="line"></div>
       <div className="seventh-item-value">
            ROI Calculator
       </div>
      <div className="line"></div>
       <div className="eight-item-value">
            Credit Score
       </div>
      <div className="line"></div>
        <div className="nine-item-value">
            Notifications
       </div>
    </div>
  )
}

export default DropdownItem;
