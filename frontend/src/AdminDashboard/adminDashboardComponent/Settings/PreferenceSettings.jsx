import React from "react";
import { FaLanguage, FaGlobe } from "react-icons/fa";

const PreferenceSettings = ({
  language,
  timezone,
  onLanguageChange,
  onTimezoneChange,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-[#c9a050]/10">
      <h2 className="text-xl font-bold text-[#0a5c3a] mb-4 flex items-center gap-2">
        <FaLanguage className="text-[#c9a050]" />
        Preferences
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Language */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-2">
            <FaLanguage className="text-[#c9a050]" />
            Language
          </label>

          <select
            value={language}
            onChange={onLanguageChange}
            className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050] transition"
          >
            <option value="English">English</option>
            <option value="Urdu">Urdu</option>
            <option value="Arabic">Arabic</option>
          </select>
        </div>

        {/* Timezone */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-2">
            <FaGlobe className="text-[#c9a050]" />
            Timezone
          </label>

          <select
            value={timezone}
            onChange={onTimezoneChange}
            className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a050] transition"
          >
            <option value="Asia/Karachi">
              Asia/Karachi (PKT)
            </option>

            <option value="Asia/Dubai">
              Asia/Dubai (GST)
            </option>

            <option value="America/New_York">
              America/New_York (EST)
            </option>

            <option value="Europe/London">
              Europe/London (GMT)
            </option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default PreferenceSettings;