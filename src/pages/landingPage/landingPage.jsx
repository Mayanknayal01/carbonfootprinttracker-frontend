import React from 'react';
import './landingPage.css'; // Add custom CSS if needed
import { useNavigate } from 'react-router-dom';
import LandingBanner from '../../components/banner/landingPageBanner/LandingBanner';
import FirstHeader from '../../components/header/firstHeader/FirstHeader';
import { neededImages } from '../../assets/assets';
import Stats from '../../components/stats/stats';

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className="landing-page">
        <LandingBanner />
        <FirstHeader />

        {/* Features Section */}
        <section id="landing-features" className="landing-features">
            <h1>Features</h1>
            <div className="landing-feature-list">
                <div className="landing-feature">
                    <i className="fa fa-globe"></i>
                    <h3>Track Your Emissions</h3>
                    <p>Track your emissions by logging daily activities, from commuting to energy use, and view their environmental impact in real time. Understand which habits contribute most to your carbon footprint, empowering you to make greener choices and reduce your impact effectively.</p>
                </div>
                <div className="landing-feature">
                    <i className="fa fa-line-chart"></i>
                    <h3>Analyze Your Data</h3>
                    <p>Get insights to your data to uncover trends in your carbon footprint, identifying periods or activities that contribute most to your emissions. With detailed insights and visual reports, see how small changes add up over time, helping you set realistic goals for a more sustainable lifestyle.</p>
                </div>
                <div className="landing-feature">
                    <i className="fa fa-leaf"></i>
                    <h3>Suggestions for Reduction</h3>
                    <p>Get personalized suggestions for reducing your carbon footprint based on your activity data. These tailored tips focus on achievable lifestyle adjustments, like optimizing travel, reducing energy consumption, or choosing eco-friendly products. Each suggestion is designed to help you make impactful changes that align with your routine, making it easier to adopt sustainable habits that contribute to a healthier planet. </p>
                </div>
            </div>
        </section>

        {/* How It Works Section */}
        {/* <section id="landing-how-it-works" className="landing-how-it-works">
            <div className="landing-how-it-works-first">
                <h2>How It Works</h2>
                <ol>
                <li>Create an account and log your daily activities.</li>
                <li>Track your carbon footprint in real-time.</li>
                <li>Get actionable insights and personalized suggestions.</li>
                </ol>
            </div>
            <div className="landing-how-it-works-second">
                <img src={neededImages.howitworks} alt="how it works images" />
            </div>
        </section> */}

        <section className="landing-how-it-works">
            <div className="landing-image-container">
                <img src={neededImages.howitworks} alt="Illustration" />
            </div>
            <div className="landing-steps-container">
                <h1>How It Works</h1>
                <ol>
                <li>Step 1: Create an account and log your daily activities.</li>
                <li>Step 2: Track your carbon footprint in real-time.</li>
                <li>Step 3: Get actionable insights and personalized suggestions.</li>
                {/* Add more steps as needed */}
                </ol>
            </div>
            </section>

            <Stats />

        {/* Call to Action Section */}
        <section id="landing-cta" className="landing-cta">
            <h2>Ready to Make a Change?</h2>
            <p>Join thousands of others on a mission to reduce their carbon footprint.</p>
            <button onClick={()=> navigate('/register')}>Sign Up Now</button>
        </section>

        {/* Footer */}
        <footer className="landing-footer">
            <p>© 2024 Carbon Footprint Tracker. All rights reserved.</p>
        </footer>
        </div>
    );
};

export default LandingPage;
