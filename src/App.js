import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/landingPage";
import LoginPage from "./pages/auth/login/login";
import RegisterPage from "./pages/auth/register/register";
import HomePage from "./pages/homePage/home";
import StatsForm from "./components/formComponent/statsForm";
import Donation from "./components/sideBarComponents/donation/donation";
import Developer from "./components/sideBarComponents/developerCorner/developerCorner";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />{" "}
          {/* Default route, shows LoginPage */}
          <Route path="/register" element={<RegisterPage />} />{" "}
          {/* Route for RegisterPage */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/statsForm" element={<StatsForm />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/developer" element={<Developer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
