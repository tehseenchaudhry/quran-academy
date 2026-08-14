import React from "react";
import { FaMoon } from "react-icons/fa";

const AppearanceSettings = ({ darkMode, onChange }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-[#c9a050]/10">
      <h2 className="text-xl font-bold text-[#0a5c3a] mb-4 flex items-center gap-2">
        <FaMoon className="text-[#c9a050]" />
        Appearance
      </h2>

      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-medium text-gray-700">
            Dark Mode
          </p>

          <p className="text-sm text-gray-500 mt-1">
            Change the appearance of your dashboard.
          </p>
        </div>

        <label className="relative inline-flex items-center cursor-pointer shrink-0">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={onChange}
            className="sr-only peer"
          />

          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#c9a050] transition-all duration-300 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
        </label>
      </div>
    </div>
  );
};

export default AppearanceSettings;