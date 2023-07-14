import React from "react";
import BgImage from "../components/atoms/BgImage";
import DashboardCard from "../components/molecules/DashboardCard";

function DashboardPage() {
  return (
    <div className="relative w-full">
      <BgImage />
      <div className="flex items-center justify-center h-screen">
        <DashboardCard />
      </div>
    </div>
  );
}

export default DashboardPage;
