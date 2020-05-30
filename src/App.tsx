import React from "react";
import { BrowserRouter } from "react-router-dom";

// components
import Navbar from "./components/shared/navbar/Navbar";
import Login from "./components/pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Login />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
