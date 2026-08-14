import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, BarChart, Bar, CartesianGrid
} from "recharts";

const Charts = () => {
  const lineData = [
    { month: "Jan", students: 120 },
    { month: "Feb", students: 180 },
    { month: "Mar", students: 250 },
    { month: "Apr", students: 320 },
    { month: "May", students: 380 },
    { month: "Jun", students: 450 },
  ];

  const pieData = [
    { name: "Tajweed", value: 120 },
    { name: "Hifz", value: 150 },
    { name: "Tafseer", value: 80 },
    { name: "Qaida", value: 100 },
  ];

  const barData = [
    { name: "Mon", classes: 12 },
    { name: "Tue", classes: 18 },
    { name: "Wed", classes: 15 },
    { name: "Thu", classes: 20 },
    { name: "Fri", classes: 10 },
    { name: "Sat", classes: 8 },
  ];

  const COLORS = ["#c9a050", "#0a5c3a", "#0d7c5b", "#b8942e"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
      
      {/* ===== LINE CHART ===== */}
      <div className="bg-white rounded-2xl shadow-md border border-[#c9a050]/10 p-5">
        <div className="mb-4">
          <h3 className="font-bold text-[#0a5c3a] text-lg">Students Growth</h3>
          <p className="text-sm text-gray-500">Monthly student enrollment</p>
        </div>
        <div className="w-full h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" />
              <Line type="monotone" dataKey="students" stroke="#c9a050" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ===== PIE CHART ===== */}
      <div className="bg-white rounded-2xl shadow-md border border-[#c9a050]/10 p-5">
        <div className="mb-4">
          <h3 className="font-bold text-[#0a5c3a] text-lg">Course Distribution</h3>
          <p className="text-sm text-gray-500">Student enrollment by course</p>
        </div>
        <div className="w-full h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={80} label={{ fontSize: 11 }}>
                {pieData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default Charts;