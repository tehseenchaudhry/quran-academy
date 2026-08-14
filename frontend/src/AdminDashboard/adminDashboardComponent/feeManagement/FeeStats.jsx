import React from "react";
import { FaMoneyBillWave, FaWallet, FaCreditCard, FaHandHoldingUsd } from "react-icons/fa";

const FeeStats = ({ totalRevenue, paid, pending, overdue }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-[#c9a050]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Revenue</p>
            <h3 className="text-2xl font-bold text-[#0a5c3a]">${totalRevenue.toLocaleString()}</h3>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#c9a050]/10 flex items-center justify-center text-[#c9a050]">
            <FaMoneyBillWave />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-green-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Paid</p>
            <h3 className="text-2xl font-bold text-green-600">${paid.toLocaleString()}</h3>
          </div>
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            <FaWallet />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-yellow-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Pending</p>
            <h3 className="text-2xl font-bold text-yellow-600">${pending.toLocaleString()}</h3>
          </div>
          <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
            <FaCreditCard />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-red-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Overdue</p>
            <h3 className="text-2xl font-bold text-red-600">${overdue.toLocaleString()}</h3>
          </div>
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
            <FaHandHoldingUsd />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeStats;