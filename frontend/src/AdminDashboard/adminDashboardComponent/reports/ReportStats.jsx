import React from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookOpen,
  FaMoneyBillWave,
} from "react-icons/fa";

const ReportStats = () => {
  const stats = [
    {
      title: "Total Students",
      value: "248",
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
      title: "Active Courses",
      value: "15",
      change: "+3%",
      icon: <FaBookOpen />,
      color: "bg-[#0d7c5b]",
    },
    {
      title: "Total Revenue",
      value: "$18,420",
      change: "+8%",
      icon: <FaMoneyBillWave />,
      color: "bg-[#b8942e]",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>

              <h2 className="text-2xl font-bold text-[#0a5c3a] mt-2">
                {stat.value}
              </h2>

              <p className="text-xs text-green-600 font-medium mt-2">
                {stat.change} this month
              </p>
            </div>

            <div
              className={`${stat.color} w-12 h-12 rounded-xl text-white flex items-center justify-center text-xl`}
            >
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReportStats;