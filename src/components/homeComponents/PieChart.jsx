// PieChart.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
    { name: 'Giveaway', value: 60 },
    { name: 'Affiliate', value: 24 },
    { name: 'Offline Sales', value: 16 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const CustomPieChart = () => (
    <PieChart width={200} height={200}>
        <Pie
        data={data}
        cx={100}
        cy={100}
        innerRadius={40}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        >
        {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        </Pie>
        <Tooltip />
    </PieChart>
);

export default CustomPieChart;
