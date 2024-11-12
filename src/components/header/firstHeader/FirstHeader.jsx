import React from 'react';
import './FirstHeader.css';

const FirstHeader = () => {
    return (
        <header className="Firstheader">
            <h1><i>Carbon Footprint Tracker</i></h1>
            <nav>
                <ul>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="#cta">Get Started</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default FirstHeader;
