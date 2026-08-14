import React from "react";
import { FaSave } from "react-icons/fa";

const ProfileInfo = ({ profile, setProfile, isEditing, onSave }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <div className="bg-white rounded-2xl shadow-md p-6 border border-[#c9a050]/10">
        <h3 className="text-xl font-bold text-[#0a5c3a] mb-4">Profile Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050] transition-all duration-300 ${
                isEditing ? "border-[#c9a050] bg-white" : "border-gray-200 bg-gray-50"
              }`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050] transition-all duration-300 ${
                isEditing ? "border-[#c9a050] bg-white" : "border-gray-200 bg-gray-50"
              }`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050] transition-all duration-300 ${
                isEditing ? "border-[#c9a050] bg-white" : "border-gray-200 bg-gray-50"
              }`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Role</label>
            <input
              type="text"
              name="role"
              value={profile.role}
              disabled
              className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-500"
            />
          </div>
        </div>

        {isEditing && (
          <button
            onClick={onSave}
            className="mt-6 px-8 py-3 bg-[#0a5c3a] text-white rounded-xl hover:bg-[#c9a050] transition-all duration-300 flex items-center gap-2"
          >
            <FaSave /> Save Changes
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;