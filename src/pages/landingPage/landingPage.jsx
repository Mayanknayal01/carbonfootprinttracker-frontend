import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <div className="landing-box">
                <h1>Welcome to Carbon Footprint Tracker</h1>
                <p>
                    Track and manage your carbon footprint easily with our comprehensive tools. 
                    Stay on top of your environmental impact and work towards a sustainable future.
                </p>
                <div className="btn-container">
                    <Link to="/login">
                        <button className="btn">Login</button>
                    </Link>
                    <Link to="/register">
                        <button className="btn">Register</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
