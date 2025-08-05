import React, { useState } from 'react'
import DropdownButton from '../DropdownButton/DropdownButton'
import DropdownContent from '../DropdownContent/DropdownContent'
import './Dropdown.css'
import DropdownItem from '../DropdownItem/DropdownItem'

const Dropdown = ({user,content}) => {

    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen((open) => !open);
    };

  return (
    <div className='dropdown'>
      <DropdownButton    
        toggle={toggleDropdown}
        open={open}
        user={user} /> 
      <DropdownContent open={open}>
        <DropdownItem/>
      </DropdownContent>
    </div>
  )
}

export default Dropdown;
