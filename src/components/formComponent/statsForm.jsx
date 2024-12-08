import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import FirstHeader from '../header/firstHeader/FirstHeader';
import './statsForm.css';
import { DataContext } from '../creatContext/creatContext';

const StatsForm = () => {
    const navigate = useNavigate();
    const { setUserData } = useContext(DataContext);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        transportationMode: '',
        distance: '',
        electricityUsage: '',
        wasteGenerated: '',
        gasConsumption: ''
    });

    const [userId, setUserId] = useState(null);

    // Retrieve userId from localStorage on component mount
    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);
        } else {
            alert('User ID not found. Please log in or register first.');
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userId) {
            alert('Cannot submit form. User ID is missing.');
            return;
        }
    
        console.log('Form Data Submitted:', formData);
        const carbonFootprint = calculateCarbonFootprint(formData);
    
        const dataToSubmit = {
            ...formData,
            userId: userId,
            carbonFootprint: carbonFootprint.toFixed(2) // Include calculated footprint
        };
    
        try {
            const response = await fetch('http://localhost:5000/submit-stats', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSubmit)
            });
    
            if (response.ok) {
                const responseData = await response.json();
                console.log('Form successfully submitted:', responseData);
    
                // Save the response data in localStorage
                localStorage.setItem('userData', JSON.stringify(responseData));
    
                // Update context state with the new data
                setUserData(responseData.data);
    
                alert(`Form submitted! Estimated Carbon Footprint: ${carbonFootprint.toFixed(2)} kg CO₂/year`);
                navigate("/home");
            } else {
                const errorData = await response.json();
                console.error('Error submitting form:', errorData);
                alert('Error submitting form. Please try again.');
            }
        } catch (error) {
            console.error('Request failed:', error);
            alert('Network error. Please try again.');
        }
    };
    
    // General formula for carbon footprint calculation
    const calculateCarbonFootprint = (data) => {
        const transportEmissionFactors = {
            car: 0.21, // kg CO₂ per km
            bike: 0.05,
            public: 0.1,
            walking: 0 // Walking produces no direct CO₂
        };

        const gasEmissionFactor = 2.3; // kg CO₂ per liter of gas
        const electricityEmissionFactor = 0.85; // kg CO₂ per kWh
        const wasteEmissionFactor = 0.5; // kg CO₂ per kg of waste

        const transportEmissions = (transportEmissionFactors[data.transportationMode] || 0) * data.distance;
        const gasEmissions = data.gasConsumption * gasEmissionFactor;
        const electricityEmissions = data.electricityUsage * electricityEmissionFactor;
        const wasteEmissions = data.wasteGenerated * wasteEmissionFactor;

        return transportEmissions + gasEmissions + electricityEmissions + wasteEmissions;
    };

    return (
        <div className="stats-page">
            <FirstHeader />
            <h2>Calculate Your Carbon Footprint</h2>
            <form onSubmit={handleSubmit} className="carbon-footprint-form">
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Age:
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Transportation Mode:
                    <select
                        name="transportationMode"
                        value={formData.transportationMode}
                        onChange={handleChange}
                        required
                    >
                        <option value="">--Select--</option>
                        <option value="car">Car</option>
                        <option value="bike">Bike</option>
                        <option value="public">Public Transport</option>
                        <option value="walking">Walking</option>
                    </select>
                </label>
                <label>
                    Distance Traveled (in km):
                    <input
                        type="number"
                        name="distance"
                        value={formData.distance}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Monthly Electricity Usage (in kWh):
                    <input
                        type="number"
                        name="electricityUsage"
                        value={formData.electricityUsage}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Waste Generated (in kg):
                    <input
                        type="number"
                        name="wasteGenerated"
                        value={formData.wasteGenerated}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Gas Consumption (in liters):
                    <input
                        type="number"
                        name="gasConsumption"
                        value={formData.gasConsumption}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default StatsForm;
