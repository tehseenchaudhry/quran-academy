import React from "react";
import { FaChalkboardTeacher, FaUserCheck, FaUserClock } from "react-icons/fa";

const TeacherStats = ({ total, active, pending }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-[#c9a050]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Teachers</p>
            <h3 className="text-2xl font-bold text-[#0a5c3a]">{total}</h3>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#c9a050]/10 flex items-center justify-center text-[#c9a050]">
            <FaChalkboardTeacher />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-green-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Active Teachers</p>
            <h3 className="text-2xl font-bold text-green-600">{active}</h3>
          </div>
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            <FaUserCheck />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-yellow-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Pending Teachers</p>
            <h3 className="text-2xl font-bold text-yellow-600">{pending}</h3>
          </div>
          <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
            <FaUserClock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherStats;