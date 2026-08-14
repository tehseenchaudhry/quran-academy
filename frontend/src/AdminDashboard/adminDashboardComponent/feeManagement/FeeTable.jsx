import React from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const FeeTable = ({ fees, onEdit, onDelete, onView }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#0a5c3a] text-white">
            <tr>
              <th className="p-4 text-left text-sm">#</th>
              <th className="p-4 text-left text-sm">Student</th>
              <th className="p-4 text-left text-sm hidden md:table-cell">Course</th>
              <th className="p-4 text-left text-sm">Amount</th>
              <th className="p-4 text-left text-sm hidden sm:table-cell">Due Date</th>
              <th className="p-4 text-left text-sm">Status</th>
              <th className="p-4 text-center text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {fees.length > 0 ? (
              fees.map((fee) => (
                <tr key={fee.id} className="border-b hover:bg-[#f8f6f0] transition-colors duration-300">
                  <td className="p-4 text-sm">{fee.id}</td>
                  <td className="p-4 font-medium text-[#0a5c3a] text-sm">{fee.student}</td>
                  <td className="p-4 text-gray-600 text-sm hidden md:table-cell">{fee.course}</td>
                  <td className="p-4 font-semibold text-[#0a5c3a] text-sm">${fee.amount}</td>
                  <td className="p-4 hidden sm:table-cell text-sm">{fee.dueDate}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      fee.status === "Paid" ? "bg-green-100 text-green-600" :
                      fee.status === "Pending" ? "bg-yellow-100 text-yellow-600" :
                      "bg-red-100 text-red-600"
                    }`}>
                      {fee.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <button 
                      onClick={() => onView(fee)} 
                      className="text-blue-500 hover:text-blue-700 mx-1 transition-colors duration-300"
                    >
                      <FaEye />
                    </button>
                    <button 
                      onClick={() => onEdit(fee)} 
                      className="text-[#c9a050] hover:text-[#b8942e] mx-1 transition-colors duration-300"
                    >
                      <FaEdit />
                    </button>
                    <button 
                      onClick={() => onDelete(fee.id)} 
                      className="text-red-500 hover:text-red-700 mx-1 transition-colors duration-300"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center p-6 text-gray-500">No fee records found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeeTable;