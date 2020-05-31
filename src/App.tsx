import React from "react";
import { BrowserRouter } from "react-router-dom";

// components
import Navbar from "./components/shared/navbar/Navbar";
import Welcome from "./components/pages/welcome/Welcome";
import Login from "./components/pages/login/Login";
import Home from "./components/pages/home/Home";
import UserAuctions from "./components/pages/user_auctions/UserAuctions";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <UserAuctions />
      <Navbar />
      <Home />
      <Login />
      <Welcome />
    </BrowserRouter>
  );
}

export default App;
