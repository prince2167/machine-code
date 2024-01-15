"use client";
import BudgetList from "@/components/UI/BudgetList";
import DataTable from "@/components/UI/DataTable";
import Filter from "@/components/UI/Filter";
import MobileNavbar from "@/components/UI/MobileNavbar";
import Navbar from "@/components/UI/Navbar";
import Sidebar from "@/components/UI/Sidebar";
import HamburgerIcon from "@/components/icons/HamburgerIcon";
import { useState } from "react";

export default function Home() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const closeSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <main className="w-full">
      <div className=" lg:hidden" onClick={closeSidebar}>
        <HamburgerIcon />
      </div>
      {openSidebar && <MobileNavbar closeSidebar={closeSidebar} />}
      <div className="flex">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Navbar />
          <Filter />
          <BudgetList />
          <DataTable />
        </div>
      </div>
    </main>
  );
}
