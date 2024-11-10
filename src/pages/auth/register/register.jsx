import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './register.css';

const RegisterPage = () => {
    // Single state to store all form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    // Update state for specific field
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const { password, confirmPassword, name, email } = formData;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Prepare the data to send in the POST request
        const details = {
            name,
            email,
            password
        };
        try {
            // Send the POST request with form data
            const response = await fetch('https://carbon-footprint-traker-3.onrender.com/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(details),
            });

            // Handle response from backend
            if (response.ok) {
                const result = await response.json();
                alert("Registration successful!");
                console.log(result);
            } else {
                alert("Registration failed!");
            }
        } catch (error) {
            console.error("Error during registration:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="textbox">
                        <input
                            type="text"
                            placeholder="Full Name"
                            name="name" // Name of the field to match with formData
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="textbox">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email" // Name of the field to match with formData
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="textbox">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password" // Name of the field to match with formData
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="textbox">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword" // Name of the field to match with formData
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn">Register</button>
                </form>
                <p>Already have an account? <Link to="/">Login</Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;
