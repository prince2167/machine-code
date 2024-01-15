import React from "react";
import FilterIcon from "../icons/FilterIcon";
import SortIcon from "../../../SortIcon";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";

const Filter = () => {
  return (
    <div className="  flex justify-between items-center gap-4 flex-wrap py-[30px] px-[20px] text-[#757D8A]">
      <div>
        <h1 className="text-[#404D61] text-[24px] font-[500]  ">Employee</h1>
        <span className="text-[16px] text-[#757D8A] font-[400]">
          18 results found
        </span>
      </div>
      <div className="flex gap-[20px] items-center  flex-wrap">
        <button className="py-[10px] px-[20px] flex items-center justify-center border border-[E0E0E0] rounded-[10px] ">
          <FilterIcon />
        </button>
        <button className="flex border border-[E0E0E0] rounded-[10px] py-[10px] px-[20px] bg-[#fff] ">
          <SortIcon />
          <span className="text-[14px]">Sort Chornological</span>
        </button>
        <button className="flex items-center gap-4 border border-[E0E0E0] rounded-[10px] py-[10px] px-[20px] bg-[#fff] ">
          <LeftArrowIcon />
          <span className="text-[14px]">August, 2021</span>
          <RightArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default Filter;
