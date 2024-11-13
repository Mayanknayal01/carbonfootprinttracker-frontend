// Chart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
    { name: 'Mon', uv: 20 },
    { name: 'Tue', uv: 30 },
    { name: 'Wed', uv: 40 },
    { name: 'Thu', uv: 25 },
    { name: 'Fri', uv: 35 },
    { name: 'Sat', uv: 20 },
    { name: 'Sun', uv: 10 },
];

const Chart = () => (
    <BarChart width={300} height={200} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="uv" fill="#8884d8" />
    </BarChart>
);

export default Chart;
