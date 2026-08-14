import React from "react";

const RevenueReport = ({ period }) => {
  const revenueData = [
    { month: "Jan", paid: 1200, pending: 300, overdue: 150 },
    { month: "Feb", paid: 1500, pending: 250, overdue: 100 },
    { month: "Mar", paid: 1800, pending: 400, overdue: 200 },
    { month: "Apr", paid: 1400, pending: 200, overdue: 80 },
    { month: "May", paid: 2100, pending: 350, overdue: 120 },
    { month: "Jun", paid: 2500, pending: 450, overdue: 180 },
  ];

  const totalPaid = revenueData.reduce(
    (sum, item) => sum + item.paid,
    0
  );

  const totalPending = revenueData.reduce(
    (sum, item) => sum + item.pending,
    0
  );

  const totalOverdue = revenueData.reduce(
    (sum, item) => sum + item.overdue,
    0
  );

  const formatCurrency = (value) =>
    `$${value.toLocaleString()}`;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-6">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-5">

        <div>
          <h2 className="text-lg font-bold text-[#0a5c3a]">
            Revenue Report
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Payment and revenue overview
          </p>

          <span className="inline-flex mt-2 px-3 py-1 rounded-full bg-[#c9a050]/10 text-[#9b762d] text-xs font-semibold">
            {period} Report
          </span>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">

          {/* Paid */}
          <div className="px-3 sm:px-4 py-2 bg-green-50 rounded-xl">
            <p className="text-xs text-gray-500">
              Paid
            </p>

            <p className="font-bold text-green-600">
              {formatCurrency(totalPaid)}
            </p>
          </div>

          {/* Pending */}
          <div className="px-3 sm:px-4 py-2 bg-yellow-50 rounded-xl">
            <p className="text-xs text-gray-500">
              Pending
            </p>

            <p className="font-bold text-yellow-600">
              {formatCurrency(totalPending)}
            </p>
          </div>

          {/* Overdue */}
          <div className="px-3 sm:px-4 py-2 bg-red-50 rounded-xl">
            <p className="text-xs text-gray-500">
              Overdue
            </p>

            <p className="font-bold text-red-600">
              {formatCurrency(totalOverdue)}
            </p>
          </div>

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
                Paid
              </th>

              <th className="p-3 text-left text-sm">
                Pending
              </th>

              <th className="p-3 text-left text-sm">
                Overdue
              </th>

              <th className="p-3 text-left text-sm">
                Total
              </th>
            </tr>
          </thead>

          <tbody>

            {revenueData.map((item) => {

              const total =
                item.paid +
                item.pending +
                item.overdue;

              return (
                <tr
                  key={item.month}
                  className="border-b hover:bg-[#f8f6f0] transition-colors"
                >

                  <td className="p-3 text-sm font-medium text-[#0a5c3a]">
                    {item.month}
                  </td>

                  <td className="p-3 text-sm text-green-600 font-semibold">
                    {formatCurrency(item.paid)}
                  </td>

                  <td className="p-3 text-sm text-yellow-600">
                    {formatCurrency(item.pending)}
                  </td>

                  <td className="p-3 text-sm text-red-600">
                    {formatCurrency(item.overdue)}
                  </td>

                  <td className="p-3 text-sm font-bold text-[#0a5c3a]">
                    {formatCurrency(total)}
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

export default RevenueReport;