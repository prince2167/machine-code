"use client";

import React, { useState } from "react";
import Searchbar from "./Searchbar";
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import { FaBorderAll } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

const Navbar = () => {
  const navigation = [
    {
      icon: <CgProfile />,
      label: "Profile",
    },
    {
      icon: <FaPlus />,
      label: "Flipkart Plus Zone",
    },
    {
      icon: <FaBorderAll />,
      label: "Orders",
    },
    {
      icon: <FaHeart />,
      label: "Wishlist",
    },
    {
      icon: <FaDatabase />,
      label: "Rewards",
    },
    {
      icon: <FaGift />,
      label: "Gift Cards",
    },
  ];

  const [show, setShow] = useState(false);
  return (
    <nav className="w-full bg-[#2874f0] px-10 py-1 flex justify-center relative">
      <div className="w-[1150px]  flex justify-between items-center flex-wrap">
        <div className="flex items-center max-w-[650px] w-full gap-4 ">
          <div>
            <h1 className="text-white font-bold text-xl italic">Flipkart</h1>
            <p className="text-[12px] text-white italic flex">
              Explore
              <span className="text-yellow-500 ml-1">Plus</span>
            </p>
          </div>
          <Searchbar />
        </div>
        <button
          className="bg-white text-[#2874f0] font-[500] py-[5px] px-[40px] rounded-[2px]"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          Login
        </button>
      </div>

      {show && (
        <ul className="w-[300px] absolute top-16 right-20">
          <li className="bg-white border border-gray-300 flex justify-between p-4 text-[14px] font-[500]">
            <p>New Customer?</p>
            <p className="text-[#2874f0]">Signup</p>
          </li>
          {navigation.map((nav) => (
            <li
              key={nav.label}
              className="p-4 bg-white text-[#2874f0] flex items-center gap-4 border border-gray-200"
            >
              <span>{nav.icon}</span>
              <p className="text-black">{nav.label}</p>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
