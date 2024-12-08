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
  let maxIdEntry = null;

  for (let i = 0; i < userData.length; i++) {
      if (maxIdEntry === null || userData[i].id > maxIdEntry.id) {
          maxIdEntry = userData[i];
      }
  }
  
  // Now `maxIdEntry` holds the entry with the maximum `id`.
  

// Use the carbon footprint of the entry with the maximum id, rounded to 2 decimal places, or default to 0
const lastCarbonFootprint = (maxIdEntry?.carbonfootprint || 0).toFixed(2);


  // Calculate the total carbon footprint using a for loop
  let totalCarbonFootprint = 0;
  for (let i = 0; i < userData.length; i++) {
    totalCarbonFootprint += userData[i]?.carbonfootprint || 0; // Handle missing carbonfootprint values
  }

  // Debugging output
  console.log("Total Carbon Footprint:", totalCarbonFootprint);

  return (
    <div className="home">
      <Sidebar data={userData[0]?.name || "Guest"} />
      <main>
        <SearchBar />
        <DashboardData totalCarbonFootprint={totalCarbonFootprint} lastCarbonFootprint={lastCarbonFootprint}/>
        <Chart />
      </main>
      <div className="charts-section">
        <PieChart />
        <YourData />
      </div>
      {/* Display the total carbon footprint */}
      <div className="total-carbon-footprint">
        <h2>Total Carbon Footprint: {totalCarbonFootprint.toFixed(2)} kg CO₂</h2>
      </div>
    </div>
  );
};

export default Home;
