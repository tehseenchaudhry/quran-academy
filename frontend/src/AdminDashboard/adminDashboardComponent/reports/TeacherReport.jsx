import React from "react";

const TeacherReport = ({ period }) => {
  const teacherData = [
    {
      name: "Ustadh Ahmed",
      subject: "Tajweed",
      students: 12,
      rating: 4.8,
      classes: 45,
    },
    {
      name: "Ustadha Fatima",
      subject: "Noorani Qaida",
      students: 8,
      rating: 4.9,
      classes: 38,
    },
    {
      name: "Ustadh Muhammad",
      subject: "Islamic Studies",
      students: 15,
      rating: 4.7,
      classes: 52,
    },
    {
      name: "Ustadha Ayesha",
      subject: "Nazra Quran",
      students: 6,
      rating: 4.6,
      classes: 28,
    },
  ];

  const totalTeachers = teacherData.length;

  const totalStudents = teacherData.reduce(
    (sum, item) => sum + item.students,
    0
  );

  const totalClasses = teacherData.reduce(
    (sum, item) => sum + item.classes,
    0
  );

  const averageRating =
    teacherData.reduce((sum, item) => sum + item.rating, 0) /
    teacherData.length;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-6">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-5">

        <div>
          <h2 className="text-lg font-bold text-[#0a5c3a]">
            Teacher Performance Report
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Teacher activity and performance overview
          </p>

          <span className="inline-flex mt-2 px-3 py-1 rounded-full bg-[#c9a050]/10 text-[#9b762d] text-xs font-semibold">
            {period} Report
          </span>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">

          {/* Teachers */}
          <div className="px-3 sm:px-4 py-2 bg-[#f8f6f0] rounded-xl">
            <p className="text-xs text-gray-500">
              Teachers
            </p>

            <p className="font-bold text-[#0a5c3a]">
              {totalTeachers}
            </p>
          </div>

          {/* Students */}
          <div className="px-3 sm:px-4 py-2 bg-[#f8f6f0] rounded-xl">
            <p className="text-xs text-gray-500">
              Students
            </p>

            <p className="font-bold text-[#0a5c3a]">
              {totalStudents}
            </p>
          </div>

          {/* Classes */}
          <div className="px-3 sm:px-4 py-2 bg-[#f8f6f0] rounded-xl">
            <p className="text-xs text-gray-500">
              Classes
            </p>

            <p className="font-bold text-[#0a5c3a]">
              {totalClasses}
            </p>
          </div>

          {/* Rating */}
          <div className="px-3 sm:px-4 py-2 bg-yellow-50 rounded-xl">
            <p className="text-xs text-gray-500">
              Avg. Rating
            </p>

            <p className="font-bold text-[#c9a050]">
              {averageRating.toFixed(1)} ★
            </p>
          </div>

        </div>
      </div>

      {/* Teacher Table */}
      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-[#0a5c3a] text-white">
            <tr>

              <th className="p-3 text-left text-sm">
                Teacher
              </th>

              <th className="p-3 text-left text-sm">
                Subject
              </th>

              <th className="p-3 text-left text-sm">
                Students
              </th>

              <th className="p-3 text-left text-sm">
                Rating
              </th>

              <th className="p-3 text-left text-sm">
                Classes
              </th>

            </tr>
          </thead>

          <tbody>

            {teacherData.map((item) => (
              <tr
                key={item.name}
                className="border-b hover:bg-[#f8f6f0] transition-colors"
              >

                <td className="p-3 text-sm font-medium text-[#0a5c3a]">
                  {item.name}
                </td>

                <td className="p-3 text-sm text-gray-600">
                  {item.subject}
                </td>

                <td className="p-3 text-sm">
                  {item.students}
                </td>

                <td className="p-3 text-sm">

                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#c9a050]/10 text-[#9b762d] font-semibold">
                    {item.rating} ★
                  </span>

                </td>

                <td className="p-3 text-sm">
                  {item.classes}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
};

export default TeacherReport;