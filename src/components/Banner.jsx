import React from "react";

const data = [
  {
    id: 1,
    image: "https://via.placeholder.com/456x181",
    name: "Mount View Home",
    duration: "23 Jan 2203 - 02 Feb 2023"
  },
  {
    id: 2,
    image: "https://via.placeholder.com/456x181",
    name: "Mount View Home",
    duration: "23 Jan 2203 - 02 Feb 2023"
  },
  {
    id: 3,
    image: "https://via.placeholder.com/456x181",
    name: "Mount View Home",
    duration: "23 Jan 2203 - 02 Feb 2023"
  },
  {
    id: 4,
    image: "https://via.placeholder.com/456x181",
    name: "Mount View Home",
    duration: "23 Jan 2203 - 02 Feb 2023"
  }
];

const BannerTable = () => {
  return (
    <div className="w-[1140px] ml-[200px] bg-white rounded shadow px-6 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-[22px] font-semibold text-[#222B45]">Banner Management</div>
        <button className="bg-[#2880DA] text-white text-sm px-4 py-1.5 rounded">+ Add New</button>
      </div>

      {/* Filter Tabs */}
      <div className="flex border-b border-[#2880DA] mb-4">
        <div className="text-[#2880DA] font-semibold border-b-2 border-[#2880DA] px-4 py-2 cursor-pointer">All</div>
        <div className="text-[#A2A9BD] font-semibold px-4 py-2 cursor-pointer">Mobile Banner</div>
        <div className="text-[#A2A9BD] font-semibold px-4 py-2 cursor-pointer">Website Banner</div>
      </div>

      {/* Table Head */}
      <div className="grid grid-cols-[50px_500px_200px_200px_50px] text-[#96A5B8] text-sm font-medium py-2 border-b">
        <div>Sr. No.</div>
        <div>Image</div>
        <div>Name</div>
        <div>Duration</div>
        <div>Action</div>
      </div>

      {/* Table Rows */}
      {data.map((item, index) => (
        <div
          key={item.id}
          className="grid grid-cols-[50px_500px_200px_200px_50px] items-center py-4 border-b text-sm"
        >
          <div>{index + 1}.</div>
          <div>
            <img src={item.image} alt="banner" className="w-[456px] h-[181px] object-cover rounded" />
          </div>
          <div>{item.name}</div>
          <div>{item.duration}</div>
          <div className="flex justify-center">
            <button className="text-[#A2A9BD]">⋮</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerTable;
