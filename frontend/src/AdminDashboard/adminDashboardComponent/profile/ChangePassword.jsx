import React, { useState } from "react";
import { FaSave, FaEye, FaEyeSlash } from "react-icons/fa";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [passwordData, setPasswordData] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const toggleShow = (field) => {
    setShowPassword({ ...showPassword, [field]: !showPassword[field] });
  };

  const handleSave = () => {
    if (passwordData.new !== passwordData.confirm) {
      alert("Passwords do not match!");
      return;
    }
    if (passwordData.new.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }
    alert("Password changed successfully!");
    setPasswordData({ current: "", new: "", confirm: "" });
  };

  const PasswordInput = ({ name, placeholder, value }) => (
    <div className="relative">
      <input
        type={showPassword[name] ? "text" : "password"}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050] pr-10"
      />
      <button
        type="button"
        onClick={() => toggleShow(name)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#c9a050] transition-colors duration-300"
      >
        {showPassword[name] ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <div className="bg-white rounded-2xl shadow-md p-6 border border-[#c9a050]/10">
        <h3 className="text-xl font-bold text-[#0a5c3a] mb-4">Change Password</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Current Password</label>
            <PasswordInput name="current" placeholder="Current Password" value={passwordData.current} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">New Password</label>
            <PasswordInput name="new" placeholder="New Password" value={passwordData.new} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Confirm Password</label>
            <PasswordInput name="confirm" placeholder="Confirm Password" value={passwordData.confirm} />
          </div>
        </div>

        <button
          onClick={handleSave}
          className="mt-4 px-8 py-3 bg-[#0a5c3a] text-white rounded-xl hover:bg-[#c9a050] transition-all duration-300 flex items-center gap-2"
        >
          <FaSave /> Update Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;