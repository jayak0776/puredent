import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Service from "./Pages/Service";
import Patients from "./Pages/Patients";
import Call from "./Components/Call";
import Navbar from "./Components/Navbar";
import SanLoc from "./Components/LocationsPages/SanLoc";
import MounLoc from "./Components/LocationsPages/MounLoc";
import Login from "./Pages/Login";
import SignUp from "./Components/Login/SignUp";
import SignIn from "./Components/Login/SignIn";
import ForgotPassword from "./Components/Login/ForgotPasswordComp/ForgotPassword";
import ResetPassword from "./Components/Login/ForgotPasswordComp/ResetPassword";
import ProfileSettings from "./Components/Profile/ProfileSettings";
import AppointmentMain from "./Components/Profile/Appointment/AppointmentMain";
import AppointmentDetails from "./Components/Profile/Appointment/UserDetails/AppointmentDetails";
import AppointmentStatus from "./Components/Profile/Appointment/UserDetails/AppointmentStatus";
import DarkTheme from "./Components/Profile/DarkTheme";
import TermsAndConditions from "./Components/Profile/Appointment/TermsAndConditions";
import isTokenExpired from "./Pages/isTokenExpired";
import { ToastContainer, toast } from "react-toastify";
import SanFranscisco from "./Components/Doctors/SanFranscisco";
import MountainView from "./Components/Doctors/MountainView";

function App() {
  const [isTokenChecked, setIsTokenChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("access_token");
    const login = window.localStorage.getItem("login");
    if (login && token) {
      if (isTokenExpired(token)) {
        toast.warn("Login expired, Please login!");

        localStorage.removeItem("access_token");
        localStorage.removeItem("login");
        localStorage.removeItem("username");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("dark");

        setInterval(() => {
          navigate("/login");
          window.location.reload();
        }, 3000);
      }
    }
    setIsTokenChecked(true); // Set state after the token is checked
  }, [navigate]);

  // Only render the app when the token check is complete
  if (!isTokenChecked) {
    return null; // Or a loading spinner
  }

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/location-san-francisco" element={<SanLoc />} />
        <Route path="/location-mountain-view" element={<MounLoc />} />
        <Route path="/login" element={<Login />} />
        <Route path="/call" element={<Call />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
        <Route path="/appointment" element={<AppointmentMain />} />
        <Route path="/appointment/details" element={<AppointmentDetails />} />
        <Route path="/appointment-status" element={<AppointmentStatus />} />
        <Route path="/dark-theme" element={<DarkTheme />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/sanfranscisco/doctors" element={<SanFranscisco />} />
        <Route path="/mountainview/doctors" element={<MountainView />} />
      </Routes>
    </>
  );
}

export default App;
