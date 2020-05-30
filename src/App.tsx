import React from "react";
import { BrowserRouter } from "react-router-dom";

// components
import Navbar from "./components/shared/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
