// Dashboard.js
import React from 'react';

const Dashboard = () => (
    <div className="dashboard">
        <div className="summary-cards">
        <div className="card balance">
            <h4>Balance</h4>
            <p>$56,874</p>
            <small>+17%</small>
        </div>
        <div className="card sales">
            <h4>Sales</h4>
            <p>$24,575</p>
            <small>+23%</small>
        </div>
        <div className="card upgrade">
            <h4>Upgrade</h4>
            <button>Go Pro</button>
        </div>
        </div>
    </div>
);

export default Dashboard;
