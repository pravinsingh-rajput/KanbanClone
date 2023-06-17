import React from "react";
import { BsLink } from "react-icons/bs";
import { CiCalendar, CiFilter } from "react-icons/ci";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlinePlus, AiOutlineUsergroupAdd } from "react-icons/ai";

const DashBoardHeader = () => {
  return (
    <div className="py-4">
      <div className="text-xl flex items-center justify-between space-y-6 mb-6">
        {/* Dashboard Title */}
        <div className="flex space-x-3 items-center">
          <h4 className="text-4xl font-semibold">Mobile App</h4>
          <span>
            <MdOutlineModeEditOutline className="text-blue-800 bg-blue-500/30 rounded-md h-5 cursor-pointer w-5 p-[2px]" />
          </span>
          <span>
            <BsLink className="text-blue-800 bg-blue-500/30 rounded-md h-5 w-5 p-[2px] cursor-pointer" />
          </span>
        </div>
        {/* Invite link */}
        <div className="relative flex items-center space-x-2">
          <AiOutlinePlus className="text-blue-800 bg-blue-500/30 rounded-md h-5 w-5 p-[2px] cursor-pointer" />
          <span className="text-[#5030E5] font-[500] cursor-pointer">
            Invite
          </span>
          <div className="relative flex space-x-[-10px]">
            <img src="./Assets/Ellipse 12.png" alt="invited" />
            <img src="./Assets/Ellipse 13.png" alt="invited" />
            <img src="./Assets/Ellipse 14.png" alt="invited" />
            <img src="./Assets/Ellipse 15.png" alt="invited" />
            <img src="./Assets/Ellipse 17.png" alt="invited" />
            <span className="absolute right-3 top-[6px] text-[14px] font-semibold text-pink-700">
              +2
            </span>
          </div>
        </div>
      </div>
      {/* Filter , Sorting, Share & View */}
      <div className="flex items-center justify-between text-[#787486] font-semibold">
        <div className=" flex space-x-4 items-center justify-between">
          {/* Filter */}
          <div className="flex space-x-1 items-center w-28 justify-center border-2 p-[5px] rounded-lg">
            <CiFilter className="font-semibold" />
            <select name="filter" id="filter">
              <option value="filter"> Filter</option>
              <option value="filter2"> Filter 2</option>
              <option value="filter3"> Filter 3</option>
            </select>
          </div>
          {/* Sorting */}
          <div className="flex space-x-1 items-center justify-center border-2 w-28 p-[5px] rounded-lg">
            <CiCalendar className="font-semibold" />
            <select name="sort" id="sort">
              <option value="today"> Today</option>
              <option value="week"> Week</option>
              <option value="onth"> Month</option>
            </select>
          </div>
        </div>
        <div className=" flex space-x-4 items-center justify-between">
          {/* Filter */}
          <div className="flex space-x-1 items-center w-24 justify-center border-2 p-[5px] rounded-lg cursor-pointer">
            <AiOutlineUsergroupAdd className="font-semibold" />
            <p>Share</p>
          </div>
          <div className="w-[2px] h-8 rounded-lg bg-[#787486]"></div>
          <div className=" flex flex-col space-y-1 items-center justify-center w-9 h-9 border-0 bg-[#5030E5] p-[6px] rounded-md">
            <div className="bg-white w-full h-1 rounded-lg"></div>
            <div className="bg-white w-full h-1 rounded-lg"></div>
          </div>
          <div className=" relative  w-9 h-9 rounded-md">
            <div className="w-2 h-2 absolute rounded-full border-2 border-[#787486] top-2 left-2 "></div>
            <div className="w-2 h-2 absolute rounded-full border-2 border-[#787486] top-2 right-2 "></div>
            <div className="w-2 h-2 absolute rounded-full border-2 border-[#787486] bottom-2 left-2 "></div>
            <div className="w-2 h-2 absolute rounded-full border-2 border-[#787486] bottom-2 right-2 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHeader;
