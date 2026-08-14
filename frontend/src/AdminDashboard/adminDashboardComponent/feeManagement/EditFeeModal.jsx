import React, { useState, useEffect } from "react";

const EditFeeModal = ({ isOpen, onClose, onSubmit, fee }) => {
  const [editData, setEditData] = useState({ student: "", course: "", amount: "", dueDate: "", status: "" });

  useEffect(() => {
    if (fee) {
      setEditData({
        student: fee.student || "",
        course: fee.course || "",
        amount: fee.amount || "",
        dueDate: fee.dueDate || "",
        status: fee.status || "Pending",
      });
    }
  }, [fee]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={onClose}></div>
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
          <h2 className="text-2xl font-bold text-[#0a5c3a] mb-6">Edit Fee Record</h2>
          <form onSubmit={(e) => onSubmit(e, editData)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Student Name</label>
              <input
                type="text"
                placeholder="Enter student name"
                value={editData.student}
                onChange={(e) => setEditData({ ...editData, student: e.target.value })}
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Course</label>
              <input
                type="text"
                placeholder="Enter course name"
                value={editData.course}
                onChange={(e) => setEditData({ ...editData, course: e.target.value })}
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Amount ($)</label>
              <input
                type="number"
                placeholder="Enter amount"
                value={editData.amount}
                onChange={(e) => setEditData({ ...editData, amount: e.target.value })}
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Due Date</label>
              <input
                type="date"
                value={editData.dueDate}
                onChange={(e) => setEditData({ ...editData, dueDate: e.target.value })}
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Status</label>
              <select
                value={editData.status}
                onChange={(e) => setEditData({ ...editData, status: e.target.value })}
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050]"
              >
                <option value="Pending">Pending</option>
                <option value="Paid">Paid</option>
                <option value="Overdue">Overdue</option>
              </select>
            </div>
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
                Update Fee
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditFeeModal;