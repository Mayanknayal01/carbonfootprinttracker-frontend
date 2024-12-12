// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="landing-footer">
                <p>© 2024 Carbon Footprint Tracker. All rights reserved.</p>
            </footer>

            <style jsx>{`
                .landing-footer {
                    background-color: #333; /* Dark background for contrast */
                    color: #fff; /* White text color */
                    text-align: center; /* Center the text */
                    padding: 20px; /* Padding around the text */
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                }

                .landing-footer p {
                    margin: 0;
                    font-size: 14px;
                }
            `}</style>
        </>
    );
};

export default Footer;
