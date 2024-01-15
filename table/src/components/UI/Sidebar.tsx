import React from "react";
import Profile from "./Profile";
import SearchIcon from "../icons/SearchIcon";
import DataTableIcon from "../icons/DataTableIcon";
import ProductIcon from "../icons/ProductIcon";
import AnalyticsIcon from "../icons/AnalyticsIcon";
import CalanderIcon from "../icons/CalanderIcon";
import MassangerIcon from "../icons/MassangerIcon";
import CryptoIcon from "../icons/CryptoIcon";
import HamburgerIcon from "../icons/HamburgerIcon";
import SupportIcon from "../icons/SupportIcon";
import SignoutIcon from "../icons/SignoutIcon";

const Sidebar = () => {
  const navigation = [
    {
      label: "Search",
      icon: <SearchIcon />,
    },
    {
      label: "Data Table",
      icon: <DataTableIcon />,
    },
    {
      label: "Product",
      icon: <ProductIcon />,
    },
    {
      label: "Analytics",
      icon: <AnalyticsIcon />,
    },
    {
      label: "Calander",
      icon: <CalanderIcon />,
    },
    {
      label: "Massanger",
      icon: <MassangerIcon />,
    },
    {
      label: "Crypto",
      icon: <CryptoIcon />,
    },
  ];

  const userNavigation = [
    {
      label: "Support",
      icon: <SupportIcon />,
    },
    {
      label: "Signout",
      icon: <SignoutIcon />,
    },
  ];
  return (
    <div className="bg-[#F1F2F6] w-[250px] h-screen py-[30px] px-[20px] text-[#5A6474] flex flex-col justify-between sticky top-0">
      <div className="">
        <Profile />
        <ul className="mt-8 flex flex-col gap-4 ">
          {navigation.map((nav, index) => (
            <li
              key={index}
              className={` ${
                nav.label === "Data Table" ? "bg-white rounded-[5px]" : null
              }  flex items-center justify-between  py-[10px] px-[15px]`}
            >
              <div className="flex  items-center gap-4">
                <span>{nav.icon}</span>
                <p>{nav.label}</p>
              </div>
              <HamburgerIcon />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="mt-8 flex flex-col gap-4 ">
          {userNavigation.map((nav, index) => (
            <li
              key={index}
              className={`   flex items-center justify-between  py-[10px] px-[15px]`}
            >
              <div className="flex  items-center gap-4">
                <span>{nav.icon}</span>
                <p className="text-[14px]">{nav.label}</p>
              </div>
              <HamburgerIcon />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
