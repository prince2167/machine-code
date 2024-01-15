import React from "react";
import Sidebar from "./Sidebar";
import CancelIcon from "../icons/CancelIcon";

const MobileNavbar = ({ closeSidebar }: { closeSidebar: () => void }) => {
  return (
    <div className="fixed lg:hidden">
      <button
        onClick={closeSidebar}
        className="z-[100] absolute top-1 right-1 lg:hidden"
      >
        <CancelIcon />
      </button>
      <Sidebar />
    </div>
  );
};

export default MobileNavbar;
