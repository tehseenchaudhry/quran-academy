import React from "react";

const CourseReport = ({ period }) => {
  const courseData = [
    {
      name: "Tajweed Course",
      students: 35,
      completion: 78,
      revenue: 1750,
      rating: 4.8,
    },
    {
      name: "Hifz Program",
      students: 25,
      completion: 62,
      revenue: 1500,
      rating: 4.9,
    },
    {
      name: "Noorani Qaida",
      students: 20,
      completion: 85,
      revenue: 600,
      rating: 4.7,
    },
    {
      name: "Tafseer Course",
      students: 15,
      completion: 55,
      revenue: 750,
      rating: 4.6,
    },
    {
      name: "Islamic Studies",
      students: 12,
      completion: 70,
      revenue: 420,
      rating: 4.5,
    },
  ];

  const totalStudents = courseData.reduce(
    (sum, course) => sum + course.students,
    0
  );

  const totalRevenue = courseData.reduce(
    (sum, course) => sum + course.revenue,
    0
  );

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">

        <div>
          <h2 className="text-lg font-bold text-[#0a5c3a]">
            Course Report
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Course performance and revenue overview
          </p>
        </div>

        <div className="flex gap-3">

          <div className="px-4 py-2 bg-[#f8f6f0] rounded-xl">
            <p className="text-xs text-gray-500">
              Students
            </p>

            <p className="font-bold text-[#0a5c3a]">
              {totalStudents}
            </p>
          </div>

          <div className="px-4 py-2 bg-[#f8f6f0] rounded-xl">
            <p className="text-xs text-gray-500">
              Revenue
            </p>

            <p className="font-bold text-[#0a5c3a]">
              ${totalRevenue.toLocaleString()}
            </p>
          </div>

        </div>
      </div>

      {/* Selected Period */}
      <div className="mb-4">
        <span className="inline-flex px-3 py-1 rounded-full bg-[#c9a050]/10 text-[#9b762d] text-xs font-semibold">
          {period} Report
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-[#0a5c3a] text-white">
            <tr>
              <th className="p-3 text-left text-sm">
                Course
              </th>

              <th className="p-3 text-left text-sm">
                Students
              </th>

              <th className="p-3 text-left text-sm">
                Completion
              </th>

              <th className="p-3 text-left text-sm">
                Revenue
              </th>

              <th className="p-3 text-left text-sm">
                Rating
              </th>
            </tr>
          </thead>

          <tbody>

            {courseData.map((item) => (
              <tr
                key={item.name}
                className="border-b hover:bg-[#f8f6f0] transition-colors"
              >

                <td className="p-3 text-sm font-medium text-[#0a5c3a]">
                  {item.name}
                </td>

                <td className="p-3 text-sm">
                  {item.students}
                </td>

                <td className="p-3 text-sm">

                  <div className="flex items-center gap-2 min-w-[130px]">

                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">

                      <div
                        className="h-full bg-[#c9a050] rounded-full"
                        style={{
                          width: `${item.completion}%`,
                        }}
                      />

                    </div>

                    <span className="text-xs font-semibold">
                      {item.completion}%
                    </span>

                  </div>

                </td>

                <td className="p-3 text-sm font-semibold text-[#0a5c3a]">
                  ${item.revenue.toLocaleString()}
                </td>

                <td className="p-3 text-sm text-[#c9a050]">
                  {item.rating} ★
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
};

export default CourseReport;