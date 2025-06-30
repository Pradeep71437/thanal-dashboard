import React from "react";
import StatsCard from "../components/StatsCard";
import LeadStatusCard from "../components/LeadStatusCard";
import QuickActionsCard from "../components/QuickActionsCard";
import TodaysScheduleCard from "../components/TodaysScheduleCard";
import ChartCard from "../components/ChartCard";
import { STATS_CARDS, CHART_DATA } from "../constants/dashboardData";

const Dashboard = () => {
  return (
    <div className="p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {STATS_CARDS.map((card) => (
          <StatsCard key={card.id} {...card} />
        ))}
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <LeadStatusCard />
        <QuickActionsCard />
        <TodaysScheduleCard />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <ChartCard
          title={CHART_DATA.leadActivity.title}
          dateRange={CHART_DATA.leadActivity.dateRange}
          data={CHART_DATA.leadActivity.data}
          color="bg-yellow-200"
        />
        <ChartCard
          title={CHART_DATA.revenueTrend.title}
          dateRange={CHART_DATA.revenueTrend.dateRange}
          data={CHART_DATA.revenueTrend.data}
          color="bg-green-200"
        />
      </div>
    </div>
  );
};

export default Dashboard;
