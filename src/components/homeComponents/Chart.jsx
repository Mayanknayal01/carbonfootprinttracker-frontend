import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import dayjs from 'dayjs'; // Use a library to format the date

const Chart = ({ data }) => {
  // Format dates to only show the date part
  const formattedData = data.map((entry) => ({
    ...entry,
    date: dayjs(entry.date).format('YYYY-MM-DD'), // Format date to 'YYYY-MM-DD'
  }));

  return (
    <div className="chart-container">
      <BarChart
        width={800} // Adjust the width as needed
        height={300}
        data={formattedData}
        barSize={50} // Increase the width of each bar
        margin={{ left: 0, right: 0, top: 20, bottom: 40 }} // Adjust margins for alignment
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          interval={0} // Display all date labels
          tick={{ angle: -45, textAnchor: 'end' }} // Rotate labels if needed
        />
        <YAxis />
        <Tooltip />
        <Bar dataKey="totalCarbonFootprint" fill="#000000" /> {/* Set bar color to black */}
      </BarChart>
    </div>
  );
};

export default Chart;
