import React, { useState, useEffect, useRef } from 'react';
import './stats.css';

const Stats = () => {
    const [currentStats, setCurrentStats] = useState({
        users: 0,
        organizations: 0,
        topUsers: 0,
        projects: 0,
    });

    const targetStats = useRef({
        users: 1000,
        organizations: 50,
        topUsers: 20,
        projects: 10,
    });

    useEffect(() => {
        const interval = 20;
        const incrementValues = {
        users: Math.ceil(targetStats.current.users / 100),
        organizations: Math.ceil(targetStats.current.organizations / 100),
        topUsers: Math.ceil(targetStats.current.topUsers / 100),
        projects: Math.ceil(targetStats.current.projects / 100),
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
        <div className="stat-box">
            <h3>Users</h3>
            <p>{currentStats.users}</p>
        </div>
        <div className="stat-box">
            <h3>Organizations Using Us</h3>
            <p>{currentStats.organizations}</p>
        </div>
        <div className="stat-box">
            <h3>Top Carbon-Reducing Users</h3>
            <p>{currentStats.topUsers}</p>
        </div>
        <div className="stat-box">
            <h3>Projects Completed</h3>
            <p>{currentStats.projects}</p>
        </div>
        </section>
    );
};

export default Stats;
