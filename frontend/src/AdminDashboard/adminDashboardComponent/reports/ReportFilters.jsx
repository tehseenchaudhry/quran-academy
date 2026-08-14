import React from "react";
import { FaFilter } from "react-icons/fa";

const ReportFilters = ({
  period,
  setPeriod,
  reportType,
  setReportType,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-6">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        {/* Heading */}
        <div>
          <h2 className="font-bold text-[#0a5c3a]">
            Report Filters
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Customize your report view
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">

          {/* Period */}
          <div className="relative">
            <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c9a050] text-sm" />

            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="w-full sm:w-40 pl-9 pr-4 py-2.5 bg-[#f8f6f0] border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a050]"
            >
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>

          {/* Report Type */}
          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="w-full sm:w-40 px-4 py-2.5 bg-[#f8f6f0] border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a050]"
          >
            <option value="All">All Reports</option>
            <option value="Students">Students</option>
            <option value="Teachers">Teachers</option>
            <option value="Courses">Courses</option>
            <option value="Revenue">Revenue</option>
          </select>

        </div>
      </div>

    </div>
  );
};

export default ReportFilters;