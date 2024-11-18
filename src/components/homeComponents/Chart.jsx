import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
    { name: 'Mon', black: 20, beige: 20 },
    { name: 'Tue', black: 30, beige: 10 },
    { name: 'Wed', black: 40, beige: 0 },
    { name: 'Thu', black: 25, beige: 15 },
    { name: 'Fri', black: 35, beige: 5 },
    { name: 'Sat', black: 20, beige: 20 },
    { name: 'Sun', black: 10, beige: 30 },
];

const Chart = () => (
    <div className="chart-container">
        <BarChart width={700} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {/* Bottom Black Layer */}
            <Bar dataKey="black" stackId="a" fill="#1c1c1c" />
            {/* Top Beige Layer */}
            <Bar dataKey="beige" stackId="a" fill="#f8f7f4" />
        </BarChart>
    </div>
);

export default Chart;
