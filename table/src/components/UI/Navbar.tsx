import React from "react";
import SearchBox from "./SearchBox";
import EditIcon from "../icons/EditIcon";

const Navbar = () => {
  return (
    <div className="py-[30px] px-[20px] flex gap-4 flex-wrap justify-between items-center w-full">
      <h1 className="text-[#404D61] text-[28px] font-bold">Data Table</h1>
      <div className="flex gap-[20px] flex-wrap">
        <SearchBox />
        <div className="flex gap-[20px] ">
          <button className="bg-[#5B6AD0] text-[#FFFFFF] rounded-[10px] py-[13px] px-[20px] ">
            Add Employee
          </button>
          <button className="flex items-center justify-center border  border-[#E0E0E0] rounded-[10px] p-[13px] ">
            <EditIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
