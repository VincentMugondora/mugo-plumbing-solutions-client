// DashboardLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import SideNavbar from "../components/navbars/SideNavbar";
import Topmenu from "../components/navbars/Topmenu";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="lg:w-64 bg-gray-200">
        <Topmenu />
        <SideNavbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
