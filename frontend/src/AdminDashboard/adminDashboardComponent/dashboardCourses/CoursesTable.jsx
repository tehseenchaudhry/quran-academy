import React from "react";
import { FaEdit, FaTrash, FaUsers } from "react-icons/fa";

const CoursesTable = ({ courses, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#0a5c3a] text-white">
            <tr>
              <th className="p-4 text-left text-sm">#</th>
              <th className="p-4 text-left text-sm">Title</th>
              <th className="p-4 text-left text-sm hidden md:table-cell">Category</th>
              <th className="p-4 text-left text-sm">Level</th>
              <th className="p-4 text-left text-sm hidden sm:table-cell">Students</th>
              <th className="p-4 text-left text-sm">Status</th>
              <th className="p-4 text-center text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.length > 0 ? (
              courses.map((course) => (
                <tr key={course.id} className="border-b hover:bg-[#f8f6f0] transition-colors duration-300">
                  <td className="p-4 text-sm">{course.id}</td>
                  <td className="p-4 font-medium text-[#0a5c3a] text-sm">{course.title}</td>
                  <td className="p-4 text-gray-600 text-sm hidden md:table-cell">{course.category}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      course.level === "Beginner" ? "bg-green-100 text-green-600" :
                      course.level === "Intermediate" ? "bg-yellow-100 text-yellow-600" :
                      "bg-purple-100 text-purple-600"
                    }`}>
                      {course.level}
                    </span>
                  </td>
                  <td className="p-4 hidden sm:table-cell text-sm">{course.students || 0}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      course.status === "Active" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                    }`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <button 
                      onClick={() => onEdit(course)} 
                      className="text-[#c9a050] hover:text-[#b8942e] mx-1 transition-colors duration-300"
                    >
                      <FaEdit />
                    </button>
                    <button 
                      onClick={() => onDelete(course.id)} 
                      className="text-red-500 hover:text-red-700 mx-1 transition-colors duration-300"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center p-6 text-gray-500">No courses found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursesTable;