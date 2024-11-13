// Sidebar.js
import React from 'react';
import { FaHome, FaChartPie, FaDollarSign, FaBoxes, FaUser, FaEnvelope, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { neededImages } from '../../assets/assets';


const Sidebar = () => (
    <div className="sidebar">
        <div className="sidebar-profile">
            <h2>Carbon Footprint Tracker</h2>
        <img src={neededImages.profile} alt="Profile" />
        <h3>Mark Johnson</h3>
        <p>Welcome Back!</p>
        </div>
        <ul className="sidebar-menu">
        <li><FaHome /> Dashboard</li>
        <li><FaChartPie /> Statistics</li>
        <li><FaDollarSign /> Donation</li>
        <li><FaBoxes /> Developer's Corner</li>
        <li><FaUser /> Edit Profile</li>
        <li><FaEnvelope /> Contact</li>
        <li><FaCog /> Developer's Corner</li>
        <li><FaSignOutAlt /> Log Out</li>
        </ul>
    </div>
);

export default Sidebar;
