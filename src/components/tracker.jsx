import React, { useState } from 'react';

function Tracker() {
    const [carbonFootprint, setCarbonFootprint] = useState(0);

    return (
        <div>
            <h2>Track Your Carbon Footprint</h2>
            <input type="number" placeholder="Enter distance in km" />
            <button onClick={() => setCarbonFootprint(carbonFootprint + 1)}>Calculate</button>
            <p>Your estimated footprint: {carbonFootprint}</p>
        </div>
    );
}

export default Tracker;
