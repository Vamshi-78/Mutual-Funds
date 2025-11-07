import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppMenu from "./AppMenu";
import Home from "./Home";
import About from "./About";
import "./styles.css";
import Contact from "./Contact";

import Auth from "./Authorize";
import AdminDashboard from "./AdminDashboard";
import InvestorDashboard from "./invester-access";
import FinancialAdvisorDashboard from "./Financial";
import DataAnalystDashboard from "./Data";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("loggedIn") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="app-container">
      {/* Show menu only when logged in */}
      {isLoggedIn && <AppMenu />}

      <div className="page-content">
        <Routes>
          {/* Default route - if logged in, redirect to home, otherwise show Auth */}
          <Route
            path=""
            element={isLoggedIn ? <Navigate to="/home" /> : <Auth setIsLoggedIn={setIsLoggedIn} />}
          />

          {/* Protected routes */}
          <Route
            path="/home"
            element={isLoggedIn ? <Home /> : <Navigate to="/" />}
          />
          <Route
            path="/about"
            element={isLoggedIn ? <About /> : <Navigate to="/" />}
          />
          <Route
            path="/contact"
            element={isLoggedIn ? <Contact /> : <Navigate to="/" />}
          />
          <Route
            path="/admin-dashboard"
            element={isLoggedIn ? <AdminDashboard /> : <Navigate to="/" />}
          />
          <Route
            path="/investor-dashboard"
            element={isLoggedIn ? <InvestorDashboard /> : <Navigate to="/" />}
          />
          <Route
            path="/financial-advisor-dashboard"
            element={isLoggedIn ? <FinancialAdvisorDashboard /> : <Navigate to="/" />}
          />
          <Route
            path="/data-analyst-dashboard"
            element={isLoggedIn ? <DataAnalystDashboard /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </div>
  );
}
