import React from 'react';
import './FirstHeader.css';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

const FirstHeader = () => {
    return (
        <header className="Firstheader">
            <h1><Link to="/" style={{ color: 'white', textDecoration: 'none' }}><i>Carbon Footprint Tracker</i></Link></h1>
            <nav>
                <ul>
                    <li><HashLink to="/#features">Features</HashLink></li>
                    <li><HashLink to="/#how-it-works">How It Works</HashLink></li>
                    <li><HashLink to="/#cta">Get Started</HashLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default FirstHeader;
