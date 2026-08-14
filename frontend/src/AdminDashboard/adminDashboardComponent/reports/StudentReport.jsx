import React from "react";

const StudentReport = ({ period }) => {
  const studentData = [
    { month: "Jan", enrolled: 45, active: 38, pending: 7 },
    { month: "Feb", enrolled: 52, active: 45, pending: 7 },
    { month: "Mar", enrolled: 61, active: 52, pending: 9 },
    { month: "Apr", enrolled: 48, active: 40, pending: 8 },
    { month: "May", enrolled: 73, active: 62, pending: 11 },
    { month: "Jun", enrolled: 85, active: 68, pending: 17 },
  ];

  const totalEnrolled = studentData.reduce(
    (sum, item) => sum + item.enrolled,
    0
  );

  const totalActive = studentData.reduce(
    (sum, item) => sum + item.active,
    0
  );

  const totalPending = studentData.reduce(
    (sum, item) => sum + item.pending,
    0
  );

  const overallRetention = Math.round(
    (totalActive / totalEnrolled) * 100
  );

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-6">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-5">

        <div>
          <h2 className="text-lg font-bold text-[#0a5c3a]">
            Student Report
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Student enrollment and retention overview
          </p>

          <span className="inline-flex mt-2 px-3 py-1 rounded-full bg-[#c9a050]/10 text-[#9b762d] text-xs font-semibold">
            {period} Report
          </span>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">

          <div className="px-3 sm:px-4 py-2 bg-[#f8f6f0] rounded-xl">
            <p className="text-xs text-gray-500">
              Enrolled
            </p>

            <p className="font-bold text-[#0a5c3a]">
              {totalEnrolled}
            </p>
          </div>

          <div className="px-3 sm:px-4 py-2 bg-green-50 rounded-xl">
            <p className="text-xs text-gray-500">
              Active
            </p>

            <p className="font-bold text-green-600">
              {totalActive}
            </p>
          </div>

          <div className="px-3 sm:px-4 py-2 bg-yellow-50 rounded-xl">
            <p className="text-xs text-gray-500">
              Pending
            </p>

            <p className="font-bold text-yellow-600">
              {totalPending}
            </p>
          </div>

        </div>
      </div>

      {/* Overall Retention */}
      <div className="mb-5 p-4 bg-[#f8f6f0] rounded-xl">

        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-semibold text-gray-700">
            Overall Retention Rate
          </p>

          <span className="text-sm font-bold text-[#0a5c3a]">
            {overallRetention}%
          </span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#c9a050] rounded-full"
            style={{ width: `${overallRetention}%` }}
          />
        </div>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-[#0a5c3a] text-white">
            <tr>
              <th className="p-3 text-left text-sm">
                Month
              </th>

              <th className="p-3 text-left text-sm">
                Enrolled
              </th>

              <th className="p-3 text-left text-sm">
                Active
              </th>

              <th className="p-3 text-left text-sm">
                Pending
              </th>

              <th className="p-3 text-left text-sm">
                Retention Rate
              </th>
            </tr>
          </thead>

          <tbody>

            {studentData.map((item) => {

              const retention = Math.round(
                (item.active / item.enrolled) * 100
              );

              return (
                <tr
                  key={item.month}
                  className="border-b hover:bg-[#f8f6f0] transition-colors"
                >

                  <td className="p-3 text-sm font-medium text-[#0a5c3a]">
                    {item.month}
                  </td>

                  <td className="p-3 text-sm">
                    {item.enrolled}
                  </td>

                  <td className="p-3 text-sm text-green-600">
                    {item.active}
                  </td>

                  <td className="p-3 text-sm text-yellow-600">
                    {item.pending}
                  </td>

                  <td className="p-3 text-sm font-semibold">
                    {retention}%
                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>

      </div>
    </div>
  );
};

export default StudentReport;