import React from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaClock,
} from "react-icons/fa";

const StatsCards = () => {
  const stats = [
    {
      title: "Total Students",
      value: "2,847",
      change: "+12%",
      icon: <FaUserGraduate />,
      color: "bg-[#0a5c3a]",
    },
    {
      title: "Active Teachers",
      value: "48",
      change: "+5%",
      icon: <FaChalkboardTeacher />,
      color: "bg-[#c9a050]",
    },
    {
      title: "Total Courses",
      value: "15",
      change: "+3%",
      icon: <FaBook />,
      color: "bg-[#0d7c5b]",
    },
    {
      title: "Learning Hours",
      value: "3,642",
      change: "+24%",
      icon: <FaClock />,
      color: "bg-[#b8942e]",
    },
  ];

  return (
    <div className="mb-6">
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0a5c3a]">
          Dashboard Overview
        </h1>

        <p className="text-gray-500 mt-1 text-sm sm:text-base">
          Welcome back! Here's what's happening with your academy.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              
              {/* Content */}
              <div>
                <p className="text-sm text-gray-500">
                  {stat.title}
                </p>

                <h2 className="text-2xl font-bold text-[#0a5c3a] mt-2">
                  {stat.value}
                </h2>

                <p className="text-xs text-green-600 font-medium mt-2">
                  {stat.change} this month
                </p>
              </div>

              {/* Icon */}
              <div
                className={`${stat.color} w-12 h-12 rounded-xl text-white flex items-center justify-center text-xl shadow-md`}
              >
                {stat.icon}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCards;