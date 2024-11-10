import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle login on form submit
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData; // Destructure formData to get email and password

    const details = { email, password }; // Prepare the details object

    try {
      // Make POST request to backend for login
      const response = await fetch("https://carbon-footprint-traker-3.onrender.com/login", {
        method: "POST", // Corrected method to POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details), // Send details in the request body
      });

      if (response.ok) {
        const result = await response.json();
        alert("Login successful!"); // Show success message
        console.log(result); // Log the result from the backend
      } else {
        alert("Login failed! Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="textbox">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email} // Access email from formData
              onChange={handleChange} // Handle changes
              required
            />
          </div>
          <div className="textbox">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password} // Access password from formData
              onChange={handleChange} // Handle changes
              required
            />
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
