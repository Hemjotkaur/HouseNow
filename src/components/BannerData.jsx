import React from "react";

const BannerData = ({ Data }) => {
  return (
    <>
      <div className="rounded-tl-[6px] rounded-tr-[6px] px-10 w-[1140px] h-[1043px] shadow-lg ml-[200px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-[20px] mt-[20px] ">
            <div className="text-[17px] font-semibold text-[#2880DA] w-[50px] h-[19px]">
              All
            </div>
            <div className="text-[17px] font-semibold text-[#A2A9BD] w-[128px] h-[19px]">
              Mobile Banner
            </div>
            <div className="text-[17px] font-semibold text-[#A2A9BD] w-[142px] h-[19px]">
              Website Banner
            </div>
          </div>
          <div className="pl-[633px]">
            <button className="w-[97px] h-[32px] rounded-[7px] mt-[20px] bg-[#2880DA] text-white pt-[5px] pr-[9px] pb-[9px] pl-[11px] font-normal text-[13px] font-opensans ">
              + Add New
            </button>
          </div>
        </div>

        <table className="mt-[32px]">
          {/* <thead>
            <tr >
                <div className="flex  gap-[381px] items-center justify-center">


              <div className="flex gap-[34px]">
                <th className=" text-[13px] font-normal font-opensans text-[#96A5B8]">
                  Sr.No.
                </th>
                <th className="w-[104px] h-[17px]  text-[14px] font-normal font-inter text-[#96A5B8] ">
                  Image
                </th>
              </div>
             <div className="flex gap-[148px] items-center justify-center">
                  <th className="w-[66px] h-[17px] text-[14px] font-normal font-inter text-[#96A5B8] ">
                Name
              </th>
              <th className="w-[58px] h-[19px]  text-[13px] font-normal font-opensans text-[#96A5B8] ">
                Duration
              </th>
              <th className="w-[108px] h-[19px]  text-[13px] font-normal font-opensans text-[#96A5B8] ">
                Action
              </th>
             </div>              
               </div>
            </tr>
          </thead> */}
          <div className="w-[100%] h-[1px] bg-[#F3F3F3]">

          </div>
          <tbody className="mt-[22px]">
            {Data.map((item, index) => (
              <tr
                key={item.id}
                className="w-[1075px] h-[181px] flex mt-[22px] mb-[42px]"
              >
                <td className="text-[14px] font-normal font-inter ">{index + 1}.</td>
                <td className="">
                  <img
                    src={item.image}
                    alt="banner"
                    className="w-[456px] h-[181px] object-cover rounded-[10px] ml-[67px]"
                  />
                </td>
                <td className="ml-[41px] text-[14px] text-[#222B45] w-[135px] h-[17px]">{item.name}</td>
                <td className="ml-[75px] w-[118px] h-[34px]">{item.duration}</td>
                <td className="pl-[59px]">
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                
                </td>
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BannerData;
