import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['red', 'green', 'yellow', 'blue'];

const CustomPieChart = ({ data }) => (
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
