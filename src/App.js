import React from "react";
import { RouterApp } from "./router/RouterApp";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/Navbar/NavBar";

export default function App() {
  return (
    <Router>
      <NavBar />
      <RouterApp />
    </Router>
  );
}
