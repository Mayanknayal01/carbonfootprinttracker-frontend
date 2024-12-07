import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import FirstHeader from "../../../components/header/firstHeader/FirstHeader";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

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
    const { email, password } = formData;

    const details = { email, password };

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });

      const result = await response.json(); // Parse the response only once

      if (response.ok) {
        localStorage.setItem("userId", result.id); // Save userId in localStorage
        alert("Login successful!");
        console.log("Logged in user:", result);
        navigate("/home"); // Navigate to homepage after success
      } else {
        // Show error message from backend
        alert(result.error || "Login failed! Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <FirstHeader />
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="login-textbox">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="login-textbox">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-btn">
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
