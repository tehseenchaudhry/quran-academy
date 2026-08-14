import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaVideo, FaClock, FaSearch, FaFilter, FaArrowLeft } from "react-icons/fa";

const AllClasses = () => {
  const [search, setSearch] = useState("");
  const [filterDate, setFilterDate] = useState("All");

  const allClasses = [
    { id: 1, subject: "Quran with Tajweed", teacher: "Ustadh Ahmed", time: "10:00 AM", date: "Today", duration: "45 min", students: 8 },
    { id: 2, subject: "Noorani Qaida", teacher: "Ustadha Fatima", time: "12:30 PM", date: "Today", duration: "30 min", students: 5 },
    { id: 3, subject: "Islamic Studies", teacher: "Ustadh Muhammad", time: "04:00 PM", date: "Today", duration: "60 min", students: 12 },
    { id: 4, subject: "Nazra Quran", teacher: "Ustadha Ayesha", time: "07:00 PM", date: "Tomorrow", duration: "45 min", students: 6 },
    { id: 5, subject: "Tajweed Advanced", teacher: "Ustadh Ahmed", time: "09:00 AM", date: "Tomorrow", duration: "50 min", students: 4 },
    { id: 6, subject: "Quran Translation", teacher: "Ustadha Fatima", time: "02:00 PM", date: "Tomorrow", duration: "55 min", students: 7 },
  ];

  const filteredClasses = allClasses.filter((cls) => {
    const matchSearch = cls.subject.toLowerCase().includes(search.toLowerCase()) ||
      cls.teacher.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filterDate === "All" || cls.date === filterDate;
    return matchSearch && matchFilter;
  });

  return (
    <div className="min-h-screen lg:ms-64 mt-14 bg-[#f8f6f0] p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#0a5c3a]">All Classes</h1>
          <p className="text-sm text-gray-500">Manage all your scheduled classes</p>
        </div>
        <Link to="/dashboard" className="flex items-center gap-2 text-[#c9a050] hover:text-[#b8942e] transition-colors duration-300">
          <FaArrowLeft /> Back to Dashboard
        </Link>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c9a050]" />
          <input
            type="text"
            placeholder="Search classes..."
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050] transition-all duration-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className="px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050] transition-all duration-300"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        >
          <option value="All">All Dates</option>
          <option value="Today">Today</option>
          <option value="Tomorrow">Tomorrow</option>
        </select>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClasses.map((cls) => (
          <Link key={cls.id} to={`/dashboard/classes/${cls.id}`}>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 border border-[#c9a050]/10 cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#0a5c3a] text-white flex items-center justify-center">
                  <FaVideo />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a5c3a]">{cls.subject}</h3>
                  <p className="text-xs text-gray-500">{cls.teacher}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                <span className="flex items-center gap-1"><FaClock className="text-[#c9a050]" /> {cls.time}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  cls.date === "Today" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                }`}>
                  {cls.date}
                </span>
                <span className="text-xs text-gray-400">{cls.duration}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default AllClasses;