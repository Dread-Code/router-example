import React from "react";
import { RouterApp } from "./router/RouterApp";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/Navbar/NavBar";
import { UserContext } from "./context/UserContext";

export default function App() {
  const user = {
    id: 123,
    name: "Lucas",
    email: "lucasospina97@gmail.com",
  };
  return (
    <UserContext.Provider value={user}>
      <Router>
        <NavBar />
        <RouterApp />
      </Router>
    </UserContext.Provider>
  );
}
