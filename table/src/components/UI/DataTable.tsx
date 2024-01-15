"use client";

import React, { useState } from "react";
import { data } from "../../../constants/data";
import DownArrowIcon from "../icons/DownArrowIcon";
import Image from "next/image";
import user from "@/components/Images/user.svg";
import DeleteIcon from "../icons/DeleteIcon";
import SmallPencilIcon from "../icons/SmallPencilIcon";
const DataTable = () => {
  const itemPerPage = 10;
  const totalPages = data.length / itemPerPage;
  const [pageNumber, setPageNumber] = useState(1);

  const prevClick = () => {
    setPageNumber((prev) => prev - 1);
  };
  const nextClick = () => {
    setPageNumber((prev) => prev + 1);
  };
  return (
    <div className="py-[30px]  px-[20px]">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-[#FFF] text-[#B1B1B1] text-[14px] ">
              <th className="w-[360px] h-[50px]  text-left whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <span>Name</span>
                  <DownArrowIcon color="#B1B1B1" />
                </div>
              </th>
              <th className="w-[360px] h-[50px]  text-left  whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <span>Email</span>
                  <DownArrowIcon color="#B1B1B1" />
                </div>
              </th>
              <th className="w-[360px] h-[50px] text-left  whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <span>Status</span>
                  <DownArrowIcon color="#B1B1B1" />
                </div>
              </th>
              <th className="w-[360px] h-[50px]  text-left  whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <span>Role</span>
                  <DownArrowIcon color="#B1B1B1" />
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="text-[#404D61]">
            {data
              .slice((pageNumber - 1) * itemPerPage, pageNumber * itemPerPage)
              .map((item, index) => (
                <tr key={index} className="odd:bg-[#F8F8F8] h-[50px] px-3 py-2">
                  <td className="px-3 py-2 whitespace-nowrap">
                    <div className="flex items-center gap-4">
                      <Image src={user} alt="user" width={30} height={30} />
                      <span>{item.name}</span>
                    </div>
                  </td>

                  <td className="whitespace-nowrap">{item.email}</td>
                  <td className="whitespace-nowrap">{item.status}</td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <div className="flex justify-between">
                      <span>{item.role}</span>
                      <div className="flex gap-4 items-center text-[16px]">
                        <SmallPencilIcon />
                        <DeleteIcon />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-6 text-[#404D61]">
        {pageNumber > 1 && (
          <button
            className="flex justify-center items-center px-2 py-2 border border-[#757D8A] rounded-md"
            onClick={prevClick}
          >
            Prev
          </button>
        )}
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={` ${
              pageNumber === index + 1 ? "bg-blue-600 text-white" : ""
            } hidden lg:flex justify-center items-center px-2 py-2 border border-[#757D8A] rounded-md  `}
            onClick={() => setPageNumber(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        {pageNumber < totalPages && (
          <button
            className="flex justify-center items-center px-2 py-2 border border-[#757D8A] rounded-md"
            onClick={nextClick}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default DataTable;
