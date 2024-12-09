import React, { useContext } from "react";
import Sidebar from "../../components/homeComponents/Sidebar";
import SearchBar from "../../components/homeComponents/SearchBar";
import DashboardData from "../../components/homeComponents/DashboardData";
import "./home.css";
import Chart from "../../components/homeComponents/Chart";
import PieChart from "../../components/homeComponents/PieChart";
import YourData from "../../components/homeComponents/YourData";
import { DataContext } from "../../components/creatContext/creatContext";

const Home = () => {
  const { userData } = useContext(DataContext);
  // Emission factors
  const emissionFactor = {
    car: 0.21, // kg CO₂ per km
    bike: 0.05, // kg CO₂ per km
    public: 0.1, // kg CO₂ per km
    walking: 0, // kg CO₂ per km
  };

  let maxIdEntry = null;

  for (let i = 0; i < userData.length; i++) {
    if (maxIdEntry === null || userData[i].id > maxIdEntry.id) {
      maxIdEntry = userData[i];
    }
  }

  // Now `maxIdEntry` holds the entry with the maximum `id`.
  const lastCarbonFootprint = (maxIdEntry?.carbonfootprint || 0).toFixed(2);

  // Calculate the total carbon footprint using a for loop
  let totalCarbonFootprint = 0;
  const carbonDataMap = new Map();

  for (let i = 0; i < userData.length; i++) {
    totalCarbonFootprint += userData[i]?.carbonfootprint || 0; // Handle missing carbonfootprint values

    // Calculate carbon footprint for the current entry
    const user = userData[i];
    let dailyCarbonFootprint = 0;

    if (user?.distance && user?.transportmode) {
      dailyCarbonFootprint += user.distance * (emissionFactor[user.transportmode] || 0);
    }
    if (user?.electricity) {
      dailyCarbonFootprint += user.electricity * 0.85; // Example conversion factor for electricity
    }
    if (user?.waste) {
      dailyCarbonFootprint += user.waste * 0.5; // Example conversion factor for waste
    }
    if (user?.gas) {
      dailyCarbonFootprint += user.gas * 2.3; // Example conversion factor for gas
    }

    // Aggregate carbon footprint by date
    if (carbonDataMap.has(user.date)) {
      carbonDataMap.set(user.date, carbonDataMap.get(user.date) + dailyCarbonFootprint);
    } else {
      carbonDataMap.set(user.date, dailyCarbonFootprint);
    }
  }

  // Convert the map to an array and sort by date in descending order
  const carbonDataArray = Array.from(carbonDataMap.entries())
    .map(([date, totalCarbonFootprint]) => ({
      date,
      totalCarbonFootprint: parseFloat(totalCarbonFootprint.toFixed(2)), // Format to 2 decimal places
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // Get the last 7 days' data
  const lastSevenDaysData = carbonDataArray.slice(0, 7);

  // Data for the chart
  const charData = lastSevenDaysData;

  // Data for the pie chart
  let totalTransportFootprint = 0;
  let totalElectricityFootprint = 0;
  let totalWasteFootprint = 0;
  let totalGasFootprint = 0;

  for (let i = 0; i < userData.length; i++) {
    const user = userData[i];
    if (user?.distance && user?.transportmode) {
      totalTransportFootprint += user.distance * (emissionFactor[user.transportmode] || 0);
    }
    if (user?.electricity) {
      totalElectricityFootprint += user.electricity * 0.85; // Example conversion factor for electricity
    }
    if (user?.waste) {
      totalWasteFootprint += user.waste * 0.5; // Example conversion factor for waste
    }
    if (user?.gas) {
      totalGasFootprint += user.gas * 2.3; // Example conversion factor for gas
    }
  }

  const pieChartData = [
    { name: "Transport", value: Math.round((totalTransportFootprint / totalCarbonFootprint) * 100) },
    { name: "Electricity", value: Math.round((totalElectricityFootprint / totalCarbonFootprint) * 100) },
    { name: "Waste", value: Math.round((totalWasteFootprint / totalCarbonFootprint) * 100) },
    { name: "Gas", value: Math.round((totalGasFootprint / totalCarbonFootprint) * 100) },
  ];

  console.log(pieChartData);

  return (
    <div className="home">
      <Sidebar data={userData[0]?.name || "Guest"} />
      <main>
        <SearchBar />
        <DashboardData totalCarbonFootprint={totalCarbonFootprint} lastCarbonFootprint={lastCarbonFootprint} />
        <Chart data={charData} />
      </main>
      <div className="charts-section">
        <PieChart data={pieChartData} />
        <YourData data={pieChartData} />
      </div>
      {/* Display the total carbon footprint */}
      <div className="total-carbon-footprint">
        <h2>Total Carbon Footprint: {totalCarbonFootprint.toFixed(2)} kg CO₂</h2>
      </div>
    </div>
  );
};

export default Home;
