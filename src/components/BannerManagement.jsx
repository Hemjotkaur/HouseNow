import React from 'react'
import BannerData from './BannerData'

const BannerManagement = ({Data}) => {
  return (
    <>
        <div className=' bg-[#F4F7F9] w-[1140px] ml-[200px] '>
        <div className='text-[22px] font-semibold text-[#222B45] w-[225px] h-[26px]'>Banner Management</div>
        </div>
        <BannerData Data={Data}/>
     </>
  )
}

export default BannerManagement
