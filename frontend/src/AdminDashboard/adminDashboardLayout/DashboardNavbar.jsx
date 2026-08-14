import React, { useState } from "react";
import { FaBars, FaBell, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const DashboardNavbar = ({ setShowSidebar }) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="bg-white shadow-md px-4 md:px-6 py-3 flex justify-between items-center fixed top-0 z-50 w-full border-b border-[#c9a050]/20">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          className="md:hidden text-2xl text-[#c9a050] hover:text-[#b8942e] transition-colors duration-300"
          onClick={() => setShowSidebar(true)}
        >
          <FaBars />
        </button>
        <div className="flex items-center gap-1">
           <img src="/logo.jpg" alt="Admin" className="h-9 w-9 rounded-full border-2 border-[#c9a050] object-cover" />
          <h2 className="text-xl font-bold text-[#0a5c3a]">
            Al Hafiz <span className="text-[#c9a050]">Admin</span>
          </h2>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative text-gray-500 hover:text-[#0a5c3a] transition-colors duration-300">
          <FaBell className="text-xl" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">3</span>
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
          >
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Admin" className="h-9 w-9 rounded-full border-2 border-[#c9a050] object-cover" />
            <span className="hidden md:block text-sm font-semibold text-[#0a5c3a]">Admin</span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-[#c9a050]/20 py-2 z-50">
              <Link to="/dashboard/profile" className="flex items-center gap-3 px-4 py-2 hover:bg-[#f8f6f0] transition-colors duration-300">
                <FaUserCircle className="text-[#c9a050]" /> Profile
              </Link>
              <hr className="my-1 border-[#c9a050]/10" />
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-2 w-full text-left hover:bg-red-50 text-red-500 transition-colors duration-300"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;