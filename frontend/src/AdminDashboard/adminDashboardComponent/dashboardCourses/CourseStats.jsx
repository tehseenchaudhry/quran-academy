import React from "react";
import { FaBook, FaGraduationCap, FaLayerGroup } from "react-icons/fa";

const CourseStats = ({ total, active, categories }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-[#c9a050]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Courses</p>
            <h3 className="text-2xl font-bold text-[#0a5c3a]">{total}</h3>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#c9a050]/10 flex items-center justify-center text-[#c9a050]">
            <FaBook />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-green-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Active Courses</p>
            <h3 className="text-2xl font-bold text-green-600">{active}</h3>
          </div>
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            <FaGraduationCap />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-purple-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Categories</p>
            <h3 className="text-2xl font-bold text-purple-600">{categories}</h3>
          </div>
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
            <FaLayerGroup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseStats;