import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-1">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <main className="2xl:absolute 2xl:top-1/2 2xl:left-1/2 2xl:-translate-x-1/2 2xl:-translate-y-1/2 max-w-full xl:ml-52 2xl:ml-32 p-3 sm:p-6 z-40 mt-32 lg:mt-20">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;