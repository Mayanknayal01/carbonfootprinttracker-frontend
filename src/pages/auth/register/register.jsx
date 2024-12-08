import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import FirstHeader from "../../../components/header/firstHeader/FirstHeader";
import { DataContext } from "../../../components/creatContext/creatContext";


const RegisterPage = () => {
  const navigate = useNavigate();
  const { setUserData } = useContext(DataContext); // Access setUserData from context
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { password, confirmPassword, name, email } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const details = { name, email, password };

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("userId", result.id); // Save userId in localStorage
        alert("Registration successful!");

        // Initialize data with default values and update context
        const initialData = [{
          id: result.id, // Use the ID returned from backend
          name: name, // Use the name entered by the user
          transportmode: "public",
          distance: 0,
          electricity: 0,
          waste: 0,
          gas: 0,
          carbonfootprint: 0.0,
          date: new Date(),
        },];
        await setUserData(initialData); // Update context with default data

        console.log("Initialized user data:", initialData);
        navigate("/home");
      } else {
        alert(result.error || "Registration failed!");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <FirstHeader />
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="register-textbox">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="register-textbox">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="register-textbox">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="register-textbox">
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
