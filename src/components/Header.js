import React from "react";
import { CiSearch } from "react-icons/ci";
import { VscChevronDown } from "react-icons/vsc";
import {
  AiOutlineCalendar,
  AiOutlineBell,
  AiOutlineMessage,
} from "react-icons/ai";

const Header = () => {
  return (
    <header className="h-[66px] w-full relative border-b-2 flex justify-between items-center px-4 text-[#787486]">
      {/* Search Section */}
      <form className="flex items-center justify-center bg-[#F5F5F5] p-2 rounded-lg">
        <CiSearch className="text-xl mr-4 " />
        <input
          type="text"
          placeholder="Search Anything..."
          className="bg-transparent w-96 focus:outline-none"
        />
      </form>
      {/* Left Conatiner */}
      <div className="flex w-96 justify-between items-center mx-8">
        {/* Noitification , Calender & Message */}
        <div className="text-2xl flex space-x-5">
          <AiOutlineCalendar className="cursor-pointer" />
          <AiOutlineMessage className="cursor-pointer" />
          <AiOutlineBell className="cursor-pointer" />
        </div>

        {/* User Profile */}
        <div className="profile flex  space-x-2 ">
          {/* Name & Location */}
          <p className="text-black flex flex-col text-right font-[500] text-[15px]">
            Anima Agrawal
            <span className="text-[#787486] text-sm">U.P, India</span>
          </p>
          {/* Profile pic and edit  */}
          <div className="flex items-center space-x-2 ">
            <div className=" rounded-full overflow-hidden box-border h-9 w-9 ">
              <img
                src="./Assets/profile1.svg"
                alt="profile"
                className="cursor-pointer"
              />
            </div>
            <VscChevronDown className="cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
