import React, { useState } from "react";
import { RouterApp } from "./router/RouterApp";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/Navbar/NavBar";
import { UserContext } from "./context/UserContext";

export default function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <NavBar />
        <RouterApp />
      </Router>
    </UserContext.Provider>
  );
}
