import React from "react";
import { BrowserRouter } from "react-router-dom";

// components
import Navbar from "./components/shared/navbar/Navbar";
import Welcome from "./components/pages/welcome/Welcome";
import Login from "./components/pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Login />
      <Welcome />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
