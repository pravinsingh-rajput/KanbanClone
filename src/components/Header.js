import React from "react";

const Header = () => {
  return (
    <header className="h-[66px] w-full relative border-b-2 flex justify-between items-center px-4">
      <form>
        <input type="text" placeholder="Search Anything..." />
      </form>
    </header>
  );
};

export default Header;
