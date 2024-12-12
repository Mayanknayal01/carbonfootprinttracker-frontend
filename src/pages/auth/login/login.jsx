import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import FirstHeader from "../../../components/header/firstHeader/FirstHeader";
import { DataContext } from "../../../components/creatContext/creatContext";

const LoginPage = () => {
  const { setUserData } = useContext(DataContext);
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

      if (!response.ok) {
        // Handle error response
        const errorResult = await response.json();
        alert(
          errorResult.error || "Login failed! Please check your credentials."
        );
        return;
      }

      const result = await response.json(); // Parse the response once
      console.log("Login response:", result); // Debugging information

      // Save the user ID in localStorage
      const userId = result.id || result.user?.id; // Use result.id or fallback to result.user.id
      if (!userId) {
        alert("User ID is missing in the response. Please try again.");
        return;
      }
      localStorage.setItem("userId", userId);

      // Update the context with user data
      if (!result.data || result.data.length === 0) {
        const initialData = [
          {
            id: userId,
            name: result.user?.name || "Guest", // Use the name or fallback to 'Guest'
            transportmode: "public",
            distance: 0,
            electricity: 0,
            waste: 0,
            gas: 0,
            carbonfootprint: 0.0,
            date: new Date(),
          },
        ];
        setUserData(initialData); // Update context with default data
      } else {
        setUserData(result.data); // Update context with existing data
      }

      alert("Login successful!");
      navigate("/home"); // Navigate to homepage after success
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred while logging in. Please try again.");
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
