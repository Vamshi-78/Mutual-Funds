import React from "react";
import { Routes, Route } from "react-router-dom";
import AppMenu from "./AppMenu";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="app-container">
      <AppMenu />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}