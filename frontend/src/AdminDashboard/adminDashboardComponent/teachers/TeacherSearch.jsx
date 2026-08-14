import React from "react";
import { FaSearch, FaUserPlus } from "react-icons/fa";

const TeacherSearch = ({ search, setSearch, filterStatus, setFilterStatus, onAddClick }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
      <div className="relative w-full sm:w-1/3">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c9a050]" />
        <input
          type="text"
          placeholder="Search by name, email or subject..."
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050] transition-all duration-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <select
          className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050] bg-white"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
        </select>
        <button
          onClick={onAddClick}
          className="flex items-center gap-2 px-6 py-3 bg-[#0a5c3a] text-white rounded-xl hover:bg-[#c9a050] transition-all duration-300"
        >
          <FaUserPlus /> Add Teacher
        </button>
      </div>
    </div>
  );
};

export default TeacherSearch;
