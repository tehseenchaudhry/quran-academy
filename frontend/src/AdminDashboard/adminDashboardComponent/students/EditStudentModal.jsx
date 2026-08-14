import React, { useState, useEffect } from "react";

const EditStudentModal = ({ isOpen, onClose, onSubmit, student }) => {
  const [editData, setEditData] = useState({ name: "", email: "", course: "", status: "" });

  useEffect(() => {
    if (student) {
      setEditData({
        name: student.name || "",
        email: student.email || "",
        course: student.course || "",
        status: student.status || "Active",
      });
    }
  }, [student]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={onClose}></div>
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
          <h2 className="text-2xl font-bold text-[#0a5c3a] mb-6">Edit Student</h2>
          <form onSubmit={(e) => onSubmit(e, editData)} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={editData.name}
              onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050]"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={editData.email}
              onChange={(e) => setEditData({ ...editData, email: e.target.value })}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050]"
              required
            />
            <input
              type="text"
              placeholder="Course"
              value={editData.course}
              onChange={(e) => setEditData({ ...editData, course: e.target.value })}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050]"
              required
            />
            <select
              value={editData.status}
              onChange={(e) => setEditData({ ...editData, status: e.target.value })}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050]"
            >
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
            </select>
            <div className="flex gap-3 pt-2">
              <button 
                type="button" 
                onClick={onClose} 
                className="flex-1 py-3 bg-gray-200 rounded-xl hover:bg-gray-300 transition-colors duration-300"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="flex-1 py-3 bg-[#0a5c3a] text-white rounded-xl hover:bg-[#c9a050] transition-colors duration-300"
              >
                Update Student
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditStudentModal;