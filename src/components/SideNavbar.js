import React from "react";
import {
  AiOutlineDoubleLeft,
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineUsergroupAdd,
  AiOutlineUnorderedList,
  AiOutlineBulb,
} from "react-icons/ai";
import { TbMessageDots } from "react-icons/tb";
import { CiSquarePlus } from "react-icons/ci";

const SideNavbar = () => {
  return (
    <div className="border-r-2  ">
      <div className="flex relative border-b-2  items-center space-x-5 px-4 h-[66px] ">
        {/* Logo */}
        <div className="w-6 h-6 relative ">
          <div className="w-3 h-3 bg-titlecolor rounded-xl absolute top-1 left-1/2 right-1/2"></div>
          <div className="w-3 h-3 bg-titlecolor rounded-xl opacity-40 absolute bottom-0 left-4"></div>
          <div className="w-3 h-3 bg-titlecolor rounded-xl opacity-60 absolute bottom-0 left-2"></div>
        </div>
        {/* Header Title */}
        <p className="text-xl font-semibold">Project M.</p>
        <div className="w-6 h-5 flex items-center justify-center  cursor-pointer py-8 mx-10 ">
          <AiOutlineDoubleLeft className=" text-[#787486]" />
        </div>
      </div>
      {/* Navigations */}
      <div className=" border-b-2 text-[#787486] ">
        <ul className="flex flex-col justify-between w-full h-full p-4 py-[7px] space-y-1 ">
          <li className=" space-x-2 cursor-pointer h-8 ">
            <AiOutlineHome className="text-xl " /> <span>Home</span>
          </li>
          <li className=" space-x-2 cursor-pointer h-8">
            <TbMessageDots className="text-xl " /> <span>Messages</span>
          </li>
          <li className=" space-x-2 cursor-pointer h-8">
            <AiOutlineUnorderedList className="text-xl " /> <span>Tasks</span>
          </li>
          <li className=" space-x-2 cursor-pointer h-8">
            <AiOutlineUsergroupAdd className="text-xl " /> <span>Members</span>
          </li>
          <li className=" space-x-2 cursor-pointer h-8">
            <AiOutlineSetting className="text-xl " /> <span>Settings</span>
          </li>
        </ul>
      </div>
      {/* Projects */}
      <div className="p-4 px-2 text-[#787486] border-b-2">
        {/* Title */}
        <div className="project_title flex justify-between items-center pl-4 ">
          <p className="text-[11px] font-semibold">MY PROJECTS</p>
          <CiSquarePlus />
        </div>
        {/* Working Projects */}
        <div className="projects">
          <ul className="flex flex-col justify-between w-full h-full py-[7px] space-y-1 ">
            <li className=" space-x-2 cursor-pointer bg-[#5130e533] rounded-md h-8 pl-2">
              <div className="w-2 h-2 rounded-xl bg-[#7AC555]"></div>
              <div className="flex relative text-black items-center justify-between w-full ">
                <p>Mobile App</p>
                <span className="absolute bottom-1 right-2">...</span>
              </div>
            </li>
            <li className=" space-x-2 cursor-pointer h-8 pl-2">
              <div className="w-2 h-2 rounded-xl bg-[#FFA500]"></div>
              <div>Website Redesign</div>
            </li>
            <li className=" space-x-2 cursor-pointer h-8 pl-2">
              <div className="w-2 h-2 rounded-xl bg-[#E4CCFD]"></div>
              <div>Design System</div>
            </li>
            <li className=" space-x-2 cursor-pointer h-8 pl-2">
              <div className="w-2 h-2 rounded-xl bg-[#76A5EA]"></div>
              <div>Wireframes</div>
            </li>
          </ul>
        </div>
      </div>
      {/* Thoughts/ Message */}
      <div className=" items-center p-4 relative text-[#787486] ">
        <div className="bg-[#e4e4e7] w-[200px] p-4 text-sm mt-5 rounded-lg relative ">
          <div className="absolute top-[-30px] right-[70px] rounded-full bg-[#e4e4e7] w-14  p-4 flex item-center justify-center">
            <AiOutlineBulb className=" text-xl " />
          </div>
          <p className="w-full text-center text-black font-semibold z-50">
            Thoughts Time
          </p>
          <p className="text-[13px] text-center py-[4px]">
            We don’t have any notice for you, till then you can share your
            thoughts with your peers.
          </p>
          <div className="bg-white text-black p-2 rounded-lg text-center font-semibold">
            Write a Message
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
