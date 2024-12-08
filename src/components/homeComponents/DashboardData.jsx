import React from "react";
import Dashboard from "./Dashboard";

const DashboardData = ({ totalCarbonFootprint , lastCarbonFootprint }) => {
  const currentData = {
    carbonFootprint: totalCarbonFootprint, 
    carbonIncrease: lastCarbonFootprint,
    carbonReduction: 80,
  };

  const previousData = {
    carbonFootprint: (totalCarbonFootprint-lastCarbonFootprint),
    carbonReduction: 45,

  };

  return (
    <div>
      <Dashboard data={currentData} prevData={previousData} />
    </div>
  );
};

export default DashboardData;
