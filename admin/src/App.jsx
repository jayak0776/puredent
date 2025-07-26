import React from "react";
// import Login from "./Component/LoginRegister/Login";
import Home from "./Component/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "./Component/LoginRegister/Register";
import Navbar from "./Component/Navbar";
import AppointmentStatus from "./Component/AppointmentStatus";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/status" element={<AppointmentStatus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
