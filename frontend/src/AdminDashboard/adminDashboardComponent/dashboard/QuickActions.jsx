import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserPlus,
  FaBookOpen,
  FaChalkboardTeacher,
  FaEnvelope,
} from "react-icons/fa";

const QuickActions = () => {
  const actions = [
    {
      title: "Add Student",
      icon: <FaUserPlus />,
      link: "/dashboard/students",
      color: "bg-[#c9a050]",
    },
    {
      title: "Create Course",
      icon: <FaBookOpen />,
      link: "/dashboard/courses",
      color: "bg-[#0d7c5b]",
    },
    {
      title: "Add Teacher",
      icon: <FaChalkboardTeacher />,
      link: "/dashboard/teachers",
      color: "bg-[#b8942e]",
    },
    {
      title: "Send Message",
      icon: <FaEnvelope />,
      link: "/dashboard/messages",
      color: "bg-[#0a5c3a]",
    },
  ];

  return (
    <div className="mb-6">

      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-[#0a5c3a]">
          Quick Actions
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Manage your academy efficiently
        </p>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action) => (
          <Link
            to={action.link}
            key={action.title}
            className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            {/* Icon */}
            <div
              className={`${action.color} w-11 h-11 rounded-xl text-white flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300`}
            >
              {action.icon}
            </div>

            {/* Title */}
            <span className="font-semibold text-gray-700 text-sm group-hover:text-[#0a5c3a] transition-colors duration-300">
              {action.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;