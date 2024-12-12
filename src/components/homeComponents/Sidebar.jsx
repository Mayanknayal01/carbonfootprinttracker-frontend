import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaChartPie, FaDollarSign, FaBoxes, FaUser, FaEnvelope, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { neededImages } from '../../assets/assets';

const Sidebar = ({ data }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear any session or authentication tokens here (if applicable)
        localStorage.removeItem('authToken'); // Example: Clearing a token
        navigate('/'); // Redirect to the home page
    };

    return (
        <div className="sidebar">
            <div className="sidebar-profile">
                <h2>Carbon Footprint Tracker</h2>
                <img src={neededImages.profile} alt="Profile" />
                <h3>{data}</h3>
                <p>Welcome Back!</p>
            </div>
            <ul className="sidebar-menu">
                <li><FaHome /> Dashboard</li>
                <li><Link to="/statsForm" style={{ textDecoration: 'none', color: 'inherit' }} > <FaChartPie /> Check your stats! </Link> </li>
                <li><Link to="/donation" style={{ textDecoration: 'none', color: 'inherit' }} ><FaDollarSign /> Donation </Link> </li>
                <li><Link to="/developer" style={{ textDecoration: 'none', color: 'inherit' }} ><FaBoxes /> Developer's Corner</Link></li>
                <li><FaUser /> Edit Profile</li>
                <li><FaEnvelope /> Contact</li>
                <li><FaCog /> Developer's Corner</li>
                <li onClick={handleLogout} style={{ cursor: 'pointer' }}>
                    <FaSignOutAlt /> Log Out
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
