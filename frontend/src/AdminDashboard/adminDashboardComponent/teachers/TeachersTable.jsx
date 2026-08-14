import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TeachersTable = ({ teachers, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#0a5c3a] text-white">
            <tr>
              <th className="p-4 text-left text-sm">#</th>
              <th className="p-4 text-left text-sm">Name</th>
              <th className="p-4 text-left text-sm hidden md:table-cell">Email</th>
              <th className="p-4 text-left text-sm">Subject</th>
              <th className="p-4 text-left text-sm hidden sm:table-cell">Students</th>
              <th className="p-4 text-left text-sm">Status</th>
              <th className="p-4 text-center text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.length > 0 ? (
              teachers.map((teacher) => (
                <tr key={teacher.id} className="border-b hover:bg-[#f8f6f0] transition-colors duration-300">
                  <td className="p-4 text-sm">{teacher.id}</td>
                  <td className="p-4 font-medium text-[#0a5c3a] text-sm">{teacher.name}</td>
                  <td className="p-4 text-gray-600 text-sm hidden md:table-cell">{teacher.email}</td>
                  <td className="p-4 text-sm">{teacher.subject}</td>
                  <td className="p-4 hidden sm:table-cell text-sm">{teacher.students || 0}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      teacher.status === "Active" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                    }`}>
                      {teacher.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <button 
                      onClick={() => onEdit(teacher)} 
                      className="text-[#c9a050] hover:text-[#b8942e] mx-1 transition-colors duration-300"
                    >
                      <FaEdit />
                    </button>
                    <button 
                      onClick={() => onDelete(teacher.id)} 
                      className="text-red-500 hover:text-red-700 mx-1 transition-colors duration-300"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center p-6 text-gray-500">No teachers found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeachersTable;