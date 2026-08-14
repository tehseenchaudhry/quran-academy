import React, { useState } from "react";
import { FaBell, FaGlobe, FaMoon, FaSave, FaLanguage } from "react-icons/fa";

const AccountSettings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    language: "English",
    timezone: "Asia/Karachi",
  });

  const handleToggle = (name) => {
    setSettings({ ...settings, [name]: !settings[name] });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <div className="bg-white rounded-2xl shadow-md p-6 border border-[#c9a050]/10">
        <h3 className="text-xl font-bold text-[#0a5c3a] mb-4">Account Settings</h3>

        {/* Notifications */}
        <div className="flex items-center justify-between py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#c9a050]/10 flex items-center justify-center text-[#c9a050]">
              <FaBell />
            </div>
            <div>
              <p className="font-semibold text-gray-700">Email Notifications</p>
              <p className="text-sm text-gray-400">Receive email notifications about your account</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={() => handleToggle("notifications")}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-[#c9a050] after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
          </label>
        </div>

        {/* Dark Mode */}
        <div className="flex items-center justify-between py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#c9a050]/10 flex items-center justify-center text-[#c9a050]">
              <FaMoon />
            </div>
            <div>
              <p className="font-semibold text-gray-700">Dark Mode</p>
              <p className="text-sm text-gray-400">Switch between light and dark theme</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.darkMode}
              onChange={() => handleToggle("darkMode")}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-[#c9a050] after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
          </label>
        </div>

        {/* Language */}
        <div className="flex items-center justify-between py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#c9a050]/10 flex items-center justify-center text-[#c9a050]">
              <FaLanguage />
            </div>
            <div>
              <p className="font-semibold text-gray-700">Language</p>
              <p className="text-sm text-gray-400">Choose your preferred language</p>
            </div>
          </div>
          <select
            name="language"
            value={settings.language}
            onChange={handleSelectChange}
            className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050] bg-white"
          >
            <option value="English">English</option>
            <option value="Urdu">Urdu</option>
            <option value="Arabic">Arabic</option>
          </select>
        </div>

        {/* Timezone */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#c9a050]/10 flex items-center justify-center text-[#c9a050]">
              <FaGlobe />
            </div>
            <div>
              <p className="font-semibold text-gray-700">Timezone</p>
              <p className="text-sm text-gray-400">Select your timezone</p>
            </div>
          </div>
          <select
            name="timezone"
            value={settings.timezone}
            onChange={handleSelectChange}
            className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050] bg-white"
          >
            <option value="Asia/Karachi">Asia/Karachi (PKT)</option>
            <option value="Asia/Dubai">Asia/Dubai (GST)</option>
            <option value="America/New_York">America/New_York (EST)</option>
            <option value="Europe/London">Europe/London (GMT)</option>
          </select>
        </div>

        <button
          onClick={handleSave}
          className="mt-6 px-8 py-3 bg-[#0a5c3a] text-white rounded-xl hover:bg-[#c9a050] transition-all duration-300 flex items-center gap-2"
        >
          <FaSave /> Save Settings
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;