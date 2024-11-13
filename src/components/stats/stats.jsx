import React, { useState, useEffect, useRef } from 'react';
import './stats.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Stats = () => {
    const [currentStats, setCurrentStats] = useState({
        users: 0,
        organizations: 0,
        topUsers: 0,
    });

    const targetStats = useRef({
        users: 1000,
        organizations: 50,
        topUsers: 850,
    });

    useEffect(() => {
        const interval = 20;
        const incrementValues = {
            users: Math.ceil(targetStats.current.users / 100),
            organizations: Math.ceil(targetStats.current.organizations / 100),
            topUsers: Math.ceil(targetStats.current.topUsers / 100),
        };

        const intervalId = setInterval(() => {
            setCurrentStats(prevStats => {
                let updatedStats = { ...prevStats };
                let completed = true;

                for (const key in targetStats.current) {
                    if (prevStats[key] < targetStats.current[key]) {
                        updatedStats[key] = Math.min(prevStats[key] + incrementValues[key], targetStats.current[key]);
                        completed = false;
                    }
                }

                if (completed) clearInterval(intervalId);
                return updatedStats;
            });
        }, interval);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="stats-section">
            <h1>Our Stats!</h1>
            <div className="stats-first">
                <div className="stat-box">
                    <h3>
                        <i className="fas fa-user" style={{ marginRight: '8px', color: 'rgb(0, 157, 255)' }}></i> Users
                    </h3>
                    <p>{currentStats.users}</p>
                </div>
                <div className="stat-box">
                    <h3>
                        <i className="fas fa-building" style={{ marginRight: '8px', color: 'blue' }}></i> Organizations Using Us
                    </h3>
                    <p>{currentStats.organizations}</p>
                </div>
                <div className="stat-box">
                    <h3>
                        <i className="fas fa-leaf" style={{ marginRight: '8px', color: 'rgb(148, 243, 6)' }}></i> Active Carbon-Reducing Users
                    </h3>
                    <p style={{ color: 'rgb(148, 243, 6)' }}>{currentStats.topUsers}</p>
                </div>
            </div>
        </section>
    );
};

export default Stats;
