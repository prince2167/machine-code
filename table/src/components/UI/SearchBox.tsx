import React from "react";
import SearchIcon from "../icons/SearchIcon";
import CancelIcon from "../icons/CancelIcon";

const SearchBox = () => {
  return (
    <div className="flex items-center justify-between max-w-[470px] py-[10px] px-[15px] border border-[#5B6AD0] ring-4 ring-[#E2E6FF] text-[#757D8A] rounded-[10px]">
      <div className="flex gap-2 items-center">
        <SearchIcon />
        <input
          placeholder="Employee"
          className=" border border-none outline-none"
        />
      </div>
      <CancelIcon />
    </div>
  );
};

export default SearchBox;
