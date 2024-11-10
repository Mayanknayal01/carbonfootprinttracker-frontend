import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './login.css';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here (e.g., API call)
        alert("Login successful!");
    };

    return (
        <div className="login-container">
        <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
            <div className="textbox">
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
            <div className="textbox">
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            <button type="submit" className="btn">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
        </div>
    );
};

export default LoginPage;
