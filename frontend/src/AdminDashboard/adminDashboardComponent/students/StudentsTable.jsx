import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const StudentsTable = ({ students, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#0a5c3a] text-white">
            <tr>
              <th className="p-4 text-left text-sm">#</th>
              <th className="p-4 text-left text-sm">Name</th>
              <th className="p-4 text-left text-sm hidden md:table-cell">Email</th>
              <th className="p-4 text-left text-sm">Course</th>
              <th className="p-4 text-left text-sm hidden sm:table-cell">Progress</th>
              <th className="p-4 text-left text-sm">Status</th>
              <th className="p-4 text-center text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student.id} className="border-b hover:bg-[#f8f6f0] transition-colors duration-300">
                  <td className="p-4 text-sm">{student.id}</td>
                  <td className="p-4 font-medium text-[#0a5c3a] text-sm">{student.name}</td>
                  <td className="p-4 text-gray-600 text-sm hidden md:table-cell">{student.email}</td>
                  <td className="p-4 text-sm">{student.course}</td>
                  <td className="p-4 hidden sm:table-cell">
                    <div className="flex items-center gap-2 min-w-[80px]">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#c9a050] rounded-full" style={{ width: `${student.progress}%` }} />
                      </div>
                      <span className="text-xs font-semibold text-gray-600">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      student.status === "Active" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <button 
                      onClick={() => onEdit(student)} 
                      className="text-[#c9a050] hover:text-[#b8942e] mx-1 transition-colors duration-300"
                    >
                      <FaEdit />
                    </button>
                    <button 
                      onClick={() => onDelete(student.id)} 
                      className="text-red-500 hover:text-red-700 mx-1 transition-colors duration-300"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center p-6 text-gray-500">No students found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsTable;