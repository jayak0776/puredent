import React, { useEffect } from "react";
import Banner from "./SanFranscisco/Banner";
import Doctors from "./SanFranscisco/Doctors";
import SanNewSetter from "../LocationsPages/SanNewSetter";
import Trust from "../LocationsPages/Trust";
import FAQ from "../LocationsPages/FAQ";
import PatientsFeedback from "../HomePage/PatientsFeedback";
import { pfeedback } from "../DentalFeatures";
import Footer from "../HomePage/Footer";

function SanFranscisco() {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />
      <Doctors />
      <SanNewSetter />
      <Trust />
      <PatientsFeedback feedback={pfeedback} />
      <Footer />
    </>
  );
}

export default SanFranscisco;
