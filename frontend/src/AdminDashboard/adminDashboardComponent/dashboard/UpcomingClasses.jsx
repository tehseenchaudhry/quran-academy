import React from "react";
import { Link } from "react-router-dom";
import {
  FaVideo,
  FaClock,
  FaArrowRight,
  FaUsers,
} from "react-icons/fa";

const UpcomingClasses = () => {
  const classes = [
    {
      id: 1,
      subject: "Quran with Tajweed",
      teacher: "Ustadh Ahmed",
      time: "10:00 AM",
      date: "Today",
      duration: "45 min",
      students: 8,
    },
    {
      id: 2,
      subject: "Noorani Qaida",
      teacher: "Ustadha Fatima",
      time: "12:30 PM",
      date: "Today",
      duration: "30 min",
      students: 5,
    },
    {
      id: 3,
      subject: "Islamic Studies",
      teacher: "Ustadh Muhammad",
      time: "04:00 PM",
      date: "Today",
      duration: "60 min",
      students: 12,
    },
    {
      id: 4,
      subject: "Nazra Quran",
      teacher: "Ustadha Ayesha",
      time: "07:00 PM",
      date: "Tomorrow",
      duration: "45 min",
      students: 6,
    },
  ];

  return (
    <div className="mt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-xl font-bold text-[#0a5c3a]">
            Upcoming Classes
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Your next scheduled classes
          </p>
        </div>

        <Link
          to="/dashboard/classes"
          className="group flex items-center gap-2 text-sm font-semibold text-[#c9a050] hover:text-[#0a5c3a] transition-colors duration-300"
        >
          View All
          <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {classes.map((item, index) => (
          <Link
            key={item.id}
            to={`/dashboard/classes/${item.id}`}
            className={`
              group flex flex-col lg:flex-row lg:items-center
              justify-between gap-4
              p-4 sm:p-5
              hover:bg-[#f8f6f0]
              transition-all duration-300
              ${index !== classes.length - 1 ? "border-b border-gray-100" : ""}
            `}
          >
            {/* LEFT */}
            <div className="flex items-center gap-4 min-w-0">
              {/* Icon */}
              <div className="w-12 h-12 shrink-0 rounded-xl bg-[#0a5c3a] text-white flex items-center justify-center text-lg shadow-sm group-hover:bg-[#c9a050] group-hover:scale-105 transition-all duration-300">
                <FaVideo />
              </div>

              {/* Course Info */}
              <div className="min-w-0">
                <h3 className="font-bold text-gray-800 text-sm sm:text-base truncate group-hover:text-[#0a5c3a] transition-colors duration-300">
                  {item.subject}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {item.teacher}
                </p>

                {/* Mobile/Small Info */}
                <div className="flex items-center gap-3 mt-2 lg:hidden">
                  <span className="flex items-center gap-1.5 text-xs text-gray-500">
                    <FaClock className="text-[#c9a050]" />
                    {item.time}
                  </span>

                  <span className="flex items-center gap-1.5 text-xs text-gray-500">
                    <FaUsers className="text-[#c9a050]" />
                    {item.students}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center justify-between lg:justify-end gap-4 lg:gap-6">
              {/* Time */}
              <div className="hidden lg:block text-center">
                <p className="text-xs text-gray-400 mb-1">
                  Time
                </p>

                <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <FaClock className="text-[#c9a050]" />
                  {item.time}
                </div>
              </div>

              {/* Duration */}
              <div className="hidden sm:block text-center">
                <p className="text-xs text-gray-400 mb-1">
                  Duration
                </p>

                <p className="text-sm font-semibold text-gray-700">
                  {item.duration}
                </p>
              </div>

              {/* Students */}
              <div className="hidden sm:block text-center">
                <p className="text-xs text-gray-400 mb-1">
                  Students
                </p>

                <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                  <FaUsers className="text-[#c9a050]" />
                  {item.students}
                </div>
              </div>

              {/* Date */}
              <span
                className={`
                  px-3 py-1.5 rounded-full
                  text-xs font-bold whitespace-nowrap
                  ${
                    item.date === "Today"
                      ? "bg-[#0a5c3a]/10 text-[#0a5c3a]"
                      : "bg-[#c9a050]/15 text-[#9b762d]"
                  }
                `}
              >
                {item.date}
              </span>

              {/* Join */}
              <span className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#0a5c3a] text-white text-xs font-semibold whitespace-nowrap group-hover:bg-[#c9a050] transition-all duration-300 shadow-sm">
                Join
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UpcomingClasses;