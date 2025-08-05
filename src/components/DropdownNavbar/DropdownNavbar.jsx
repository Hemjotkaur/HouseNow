import React from 'react'
import './DropdownNavbar.css'
import btnimg from "../../assets/Fill 25.png";
import Dropdown from '../Dropdown/Dropdown';
import userImage from "../../assets/user.png";
import DropdownItem from '../DropdownItem/DropdownItem';

const Navbar = () => {

    const items =["My Account","My listed Properties","My Properties","Auction","Contracts","Mortgage Calculator","ROI Calculator","Credit Score","Notifications"];

    const user = {
        username: "Johns",
        userImage: userImage
    }

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
     <Dropdown 
        user={user}
        // content={
        //     <>
        //         {
        //             items.map((item) => (
        //                 <DropdownItem key={item}>
        //                     {`${item}`}
        //                 </DropdownItem>
        //             ))
        //         }
        //     </>
        // }
     />
    </div>
  )
}

export default Navbar
