import React, { useState } from 'react';
import DashboardNavbar from './DashboardNavbar';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const AdminDashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="bg-[#f8f6f0] min-h-screen">
      {/* Navbar */}
      <DashboardNavbar setShowSidebar={setShowSidebar} />

      {/* Main Content */}
      <div className="flex relative">
        {/* Sidebar */}
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

        {/* Outlet - Pages Render Hone Ka Jagah */}
        <div className="flex-1 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;