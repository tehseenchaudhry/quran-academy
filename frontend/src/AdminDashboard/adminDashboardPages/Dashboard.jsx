import React from "react";
import StatsCards from "../adminDashboardComponent/dashboard/StatsCards";
import QuickActions from "../adminDashboardComponent/dashboard/QuickActions";
import UpcomingClasses from "../adminDashboardComponent/dashboard/UpcomingClasses";
import Charts from "../adminDashboardComponent/dashboard/Charts";
import DashboardStudentsTable from "../adminDashboardComponent/dashboard/DashboardStudentsTable";

const Dashboard = () => {
  return (
    <div className="min-h-screen lg:ms-64 mt-14 bg-[#f8f6f0]">
      <div className="w-full px-3 sm:px-4 md:px-6 py-4">
        <StatsCards />
        <QuickActions />
        <UpcomingClasses />
        <Charts />
        <DashboardStudentsTable />
      </div>
    </div>
  );
};

export default Dashboard;