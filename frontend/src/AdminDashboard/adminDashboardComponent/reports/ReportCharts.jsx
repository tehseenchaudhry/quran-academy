import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

const ReportCharts = ({ period }) => {
  const monthlyRevenueData = [
    { month: "Jan", revenue: 1200, students: 45 },
    { month: "Feb", revenue: 1500, students: 52 },
    { month: "Mar", revenue: 1800, students: 61 },
    { month: "Apr", revenue: 1400, students: 48 },
    { month: "May", revenue: 2100, students: 73 },
    { month: "Jun", revenue: 2500, students: 85 },
  ];

  const classData = [
    { name: "Mon", classes: 12 },
    { name: "Tue", classes: 18 },
    { name: "Wed", classes: 15 },
    { name: "Thu", classes: 20 },
    { name: "Fri", classes: 10 },
    { name: "Sat", classes: 8 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">

      {/* Revenue Chart */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">

        <div className="mb-5">
          <h2 className="text-lg font-bold text-[#0a5c3a]">
            Revenue Overview
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {period === "Yearly"
              ? "Yearly revenue performance"
              : "Monthly revenue performance"}
          </p>
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={monthlyRevenueData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#0a5c3a"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Classes Chart */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">

        <div className="mb-5">
          <h2 className="text-lg font-bold text-[#0a5c3a]">
            Weekly Classes
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Classes conducted this week
          </p>
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={classData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="classes"
              fill="#c9a050"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default ReportCharts;