import React from 'react';
import './LandingBanner.css';
import { useNavigate } from 'react-router-dom';

const LandingBanner = () => {
    const navigate = useNavigate();
    return (
        <section className="LandingBanner">
            <div className="LandingBanner-content">
                <h2>Track and <span className='LandingBanner-span'>Reduce</span> Your Carbon Footprint with US!</h2>
                <p>Track your daily activities and understand their environmental impact with our Carbon Footprint Tracker. By making conscious decisions and reducing your carbon emissions, you contribute to a healthier planet. Our tool helps you monitor your progress and provides personalized tips to lower your footprint, supporting global sustainability efforts one step at a time.</p>
                <button onClick={()=> navigate('/login')}>Start Tracking Now</button>
            </div>
        </section>
    );
};

export default LandingBanner;
