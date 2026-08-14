import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const DashboardStudentsTable = () => {
  const students = [
    { id: 1, name: "Muhammad Ali", email: "muhammad@example.com", course: "Quran with Tajweed", progress: 85, status: "Active", enrolled: "Jan 2025" },
    { id: 2, name: "Ayesha Khan", email: "ayesha@example.com", course: "Noorani Qaida", progress: 72, status: "Active", enrolled: "Feb 2025" },
    { id: 3, name: "Omar Farooq", email: "omar@example.com", course: "Nazra Quran", progress: 64, status: "Active", enrolled: "Mar 2025" },
    { id: 4, name: "Fatima Zahra", email: "fatima@example.com", course: "Islamic Studies", progress: 91, status: "Active", enrolled: "Jan 2025" },
    { id: 5, name: "Abdullah Ahmed", email: "abdullah@example.com", course: "Quran Memorization", progress: 48, status: "Pending", enrolled: "Apr 2025" },
  ];

  // Sirf 5 students show karein (recent)
  const recentStudents = students.slice(0, 5);

  return (
    <div className="px-4 pb-4">
      <div className="bg-white rounded-2xl shadow-md p-4 border border-[#c9a050]/10">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold text-[#0a5c3a] text-lg">Recent Students</h3>
            <p className="text-sm text-gray-500">Recently enrolled students</p>
          </div>
          <Link to="/dashboard/students">
            <button className="text-sm font-semibold text-[#c9a050] flex items-center gap-2 hover:gap-3 transition-all duration-300">
              View All <FaArrowRight className="text-xs" />
            </button>
          </Link>
        </div>

        {/* Desktop Table - No Edit/Delete/Search */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#0a5c3a] text-white rounded-xl">
              <tr>
                <th className="p-3 text-left text-xs font-semibold">Student</th>
                <th className="p-3 text-left text-xs font-semibold">Course</th>
                <th className="p-3 text-left text-xs font-semibold">Progress</th>
                <th className="p-3 text-left text-xs font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentStudents.map((student) => (
                <tr key={student.id} className="border-b hover:bg-[#f8f6f0] transition-colors duration-300">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#0a5c3a] text-white flex items-center justify-center font-semibold text-sm">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700 text-sm">{student.name}</p>
                        <p className="text-xs text-gray-400">{student.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-600">{student.course}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-2 min-w-[100px]">
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#c9a050] rounded-full" style={{ width: `${student.progress}%` }} />
                      </div>
                      <span className="text-xs font-semibold text-gray-600">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      student.status === "Active" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                    }`}>
                      {student.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards - No Edit/Delete */}
        <div className="md:hidden space-y-3">
          {recentStudents.map((student) => (
            <div key={student.id} className="border border-gray-100 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0a5c3a] text-white flex items-center justify-center font-semibold text-sm">
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-700">{student.name}</p>
                    <p className="text-xs text-gray-400">{student.course}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  student.status === "Active" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                }`}>
                  {student.status}
                </span>
              </div>
              <div className="mt-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Progress</span>
                  <span className="font-semibold text-[#0a5c3a]">{student.progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#c9a050] rounded-full" style={{ width: `${student.progress}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DashboardStudentsTable;