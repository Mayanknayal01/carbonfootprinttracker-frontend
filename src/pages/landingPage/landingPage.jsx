import React from 'react';
import './landingPage.css'; // Add custom CSS if needed
import { useNavigate } from 'react-router-dom';
import LandingBanner from '../../components/banner/landingPageBanner/LandingBanner';

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className="landing-page">
        <LandingBanner />
        {/* Header */}
        <header className="header">
                <h1><i>Carbon Footprint Tracker</i></h1>
                <nav>
                    <ul>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#how-it-works">How It Works</a></li>
                        <li><a href="#cta">Get Started</a></li>
                    </ul>
                </nav>
            </header>

        {/* Hero Section */}
        <section className="hero">
            <h2>Track and Reduce Your Carbon Footprint</h2>
            <p>Make conscious choices and contribute to a greener planet.</p>
            <button onClick={()=> navigate('/login')}>Start Tracking Now</button>
        </section>

        {/* Features Section */}
        <section id="features" className="features">
            <h2>Features</h2>
            <div className="feature-list">
            <div className="feature">
                <i className="fa fa-globe"></i>
                <h3>Track Your Emissions</h3>
                <p>Record your daily activities and see how they impact the environment.</p>
            </div>
            <div className="feature">
                <i className="fa fa-line-chart"></i>
                <h3>Analyze Your Data</h3>
                <p>Get insights into your carbon footprint over time.</p>
            </div>
            <div className="feature">
                <i className="fa fa-leaf"></i>
                <h3>Suggestions for Reduction</h3>
                <p>Receive personalized tips to lower your emissions.</p>
            </div>
            </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="how-it-works">
            <h2>How It Works</h2>
            <ol>
            <li>Create an account and log your daily activities.</li>
            <li>Track your carbon footprint in real-time.</li>
            <li>Get actionable insights and personalized suggestions.</li>
            </ol>
        </section>

        {/* Call to Action Section */}
        <section id="cta" className="cta">
            <h2>Ready to Make a Change?</h2>
            <p>Join thousands of others on a mission to reduce their carbon footprint.</p>
            <button onClick={()=> navigate('/register')}>Sign Up Now</button>
        </section>

        {/* Footer */}
        <footer className="footer">
            <p>© 2024 Carbon Footprint Tracker. All rights reserved.</p>
        </footer>
        </div>
    );
};

export default LandingPage;
