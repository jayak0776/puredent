import React from "react";
import Appointment from "./Appointment";
import Banner from "./Banner";
import Benfits from "./Benfits";
import Insurance from "../../PatientsPages/Insurance";
import Footer from "../../HomePage/Footer";

function AppointmentMain() {
  return (
    <>
      <Banner />
      <Appointment />
      <Benfits />
      <Insurance />
      {/* <AppointmentDetails /> */}
      <Footer />
    </>
  );
}

export default AppointmentMain;
