
import React from 'react';
import Dashboard from './Dashboard';

const DashboardData = () => {
    const currentData = {
        carbonFootprint: 500,
        carbonReduction: 85, 
    };

    const previousData = {
        carbonFootprint: 480,
        carbonReduction: 45,
    };

    return (
        <div>
        <Dashboard data={currentData} prevData={previousData} />
        </div>
    );
};

export default DashboardData;
