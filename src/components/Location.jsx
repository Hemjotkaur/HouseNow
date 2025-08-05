import React from 'react'
import './Location.css'

const Location = () => {
  return (
<>
<div>
    <div className='search-title'>
        <div className='search-heading'>Check out a neighborhood</div>
        <div className='search-input'>
            <input type="text"placeholder='Enter address, zip, city' />
            <button>Search</button>
        </div>
    </div>
</div>
</>
  )
}

export default Location
