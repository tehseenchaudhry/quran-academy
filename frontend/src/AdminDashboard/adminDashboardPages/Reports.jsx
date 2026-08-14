import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import ReportStats from "../adminDashboardComponent/reports/ReportStats";
import ReportFilters from "../adminDashboardComponent/reports/ReportFilters";
import ReportCharts from "../adminDashboardComponent/reports/ReportCharts";
import StudentReport from "../adminDashboardComponent/reports/StudentReport";
import TeacherReport from "../adminDashboardComponent/reports/TeacherReport";
import CourseReport from "../adminDashboardComponent/reports/CourseReport";
import RevenueReport from "../adminDashboardComponent/reports/RevenueReport";

const Reports = () => {
  const [period, setPeriod] = useState("Monthly");
  const [reportType, setReportType] = useState("All");

  return (
    <div className="min-h-screen lg:ms-64 mt-14 bg-[#f8f6f0]">
      <div className="w-full px-3 sm:px-4 md:px-6 py-4">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#0a5c3a]">
              Reports & Analytics
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Monitor your academy's performance and growth
            </p>
          </div>

          <Link
            to="/dashboard"
            className="flex items-center gap-2 text-[#c9a050] hover:text-[#b8942e] transition-colors duration-300"
          >
            <FaArrowLeft />
            Back to Dashboard
          </Link>
        </div>

        {/* Stats */}
        <ReportStats />

        {/* Filters */}
        <ReportFilters
          period={period}
          setPeriod={setPeriod}
          reportType={reportType}
          setReportType={setReportType}
        />

        {/* Charts */}
        {(reportType === "All" || reportType === "Revenue") && (
          <ReportCharts period={period} />
        )}

        {/* Student Report */}
        {(reportType === "All" || reportType === "Students") && (
          <StudentReport period={period} />
        )}

        {/* Teacher Report */}
        {(reportType === "All" || reportType === "Teachers") && (
          <TeacherReport period={period} />
        )}

        {/* Course Report */}
        {(reportType === "All" || reportType === "Courses") && (
          <CourseReport period={period} />
        )}

        {/* Revenue Report */}
        {(reportType === "All" || reportType === "Revenue") && (
          <RevenueReport period={period} />
        )}

      </div>
    </div>
  );
};

export default Reports;