import React from "react";

const AddStudentModal = ({ isOpen, onClose, onSubmit, newStudent, setNewStudent }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={onClose}></div>
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
          <h2 className="text-2xl font-bold text-[#0a5c3a] mb-6">Add New Student</h2>
          <form onSubmit={onSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050]"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={newStudent.email}
              onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050]"
              required
            />
            <input
              type="text"
              placeholder="Course"
              value={newStudent.course}
              onChange={(e) => setNewStudent({ ...newStudent, course: e.target.value })}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050]"
              required
            />
            <select
              value={newStudent.status}
              onChange={(e) => setNewStudent({ ...newStudent, status: e.target.value })}
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
                Add Student
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddStudentModal;