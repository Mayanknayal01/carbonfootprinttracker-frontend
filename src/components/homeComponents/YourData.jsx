// RecentSales.js
import React from 'react';

const YourData = ({ data }) => (
  <div className="recent-sales">
    <h4>Total Carbon Produced:</h4>
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          {item.name} - {item.value}%
        </li>
      ))}
    </ul>
  </div>
);

export default YourData;
