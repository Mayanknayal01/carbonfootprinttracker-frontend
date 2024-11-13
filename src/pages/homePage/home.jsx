// import React from 'react';
// import './home.css';
// import { FaCar, FaLeaf, FaLightbulb, FaCheckCircle } from 'react-icons/fa'; // Import icons

// const Homepage = () => {
//     return (
        
//         <div className="homepage">
//         <header className="header">
//             <h1>Carbon Footprint Tracker</h1>
//             <nav>
//             <ul>
//                 <li><a href="#features">Features</a></li>
//                 <li><a href="#how-it-works">How It Works</a></li>
//                 <li><a href="#cta">Get Started</a></li>
//             </ul>
//             </nav>
//         </header>
//         {/* Welcome Section */}
//         <section className="welcome-section">
//             <h1>Welcome back, Dave!</h1>
//             <p>Your carbon footprint summary for this month:</p>
//         </section>

//         {/* Dashboard Overview */}
//         <section className="dashboard-overview">
//             <h2>Dashboard Overview</h2>
//             <div className="overview-stats">
//             <div className="stat card">
//                 <h3>Total Emissions</h3>
//                 <p>200 kg CO₂</p>
//             </div>
//             <div className="stat card">
//                 <h3>Daily Average</h3>
//                 <p>6.5 kg CO₂</p>
//             </div>
//             <div className="stat card">
//                 <h3>Compared to Last Month</h3>
//                 <p>-5%</p>
//             </div>
//             </div>
//         </section>

//         {/* Recent Activity */}
//         <section className="recent-activity card">
//             <h2>Recent Activity</h2>
//             <ul>
//             <li><FaCar className="activity-icon" /> 10 km drive - 2.3 kg CO₂</li>
//             <li><FaLeaf className="activity-icon" /> Vegan meal - 0.5 kg CO₂ saved</li>
//             <li><FaLightbulb className="activity-icon" /> Energy-efficient lighting - 0.8 kg CO₂ saved</li>
//             </ul>
//         </section>

//         {/* Progress Tracking */}
//         <section className="progress-tracking card">
//             <h2>Your Progress</h2>
//             <div className="progress-circle">
//             <FaCheckCircle size={80} color="#2ecc71" />
//             <p>60% towards goal</p>
//             </div>
//         </section>

//         {/* Goals */}
//         <section className="goals card">
//             <h2>Your Goals</h2>
//             <p>Reduce carbon emissions by 20% this month.</p>
//             <button className="btn-update">Update Goals</button>
//         </section>

//         {/* Sustainability Tips */}
//         <section className="tips card">
//             <h2>Tips for Reducing Your Carbon Footprint</h2>
//             <ul>
//             <li>Walk or cycle instead of driving for short distances.</li>
//             <li>Opt for energy-efficient appliances.</li>
//             <li>Consider a plant-based diet a few days a week.</li>
//             </ul>
//         </section>
//         <footer className="footer">
//             <p>© 2024 Carbon Footprint Tracker. All rights reserved.</p>
//         </footer>
//         </div>
//     );
// };

// export default Homepage;



// Home.jsx
import React from 'react';
import Sidebar from '../../components/homeComponents/Sidebar';
import Header from '../../components/homeComponents/Header';
import Dashboard from '../../components/homeComponents/Dashboard';
import './home.css';

const Home = () => {
    return (
        <div className="home">
        <Sidebar />
        <main>
            <Header />
            <Dashboard />
        </main>
        </div>
    );
};

export default Home;

