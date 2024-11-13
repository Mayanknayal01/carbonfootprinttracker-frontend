// Sidebar.js
import React from 'react';
import { FaHome, FaChartPie, FaDollarSign, FaBoxes, FaUser, FaEnvelope, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => (
    <div className="sidebar">
        <div className="profile">
        <img src="https://via.placeholder.com/80" alt="Profile" />
        <h3>Mark Johnson</h3>
        <p>Welcome Back</p>
        </div>
        <ul className="menu">
        <li><FaHome /> Dashboard</li>
        <li><FaChartPie /> Statistics</li>
        <li><FaDollarSign /> Payment</li>
        <li><FaBoxes /> Transactions</li>
        <li><FaUser /> Products</li>
        <li><FaEnvelope /> Messages</li>
        <li><FaCog /> Settings</li>
        <li><FaSignOutAlt /> Log Out</li>
        </ul>
    </div>
);

export default Sidebar;
