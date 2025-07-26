import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../Components/PatientsPages/Banner";
import InsuranceCoverd from "../Components/PatientsPages/InsuranceCoverd";
import Insurance from "../Components/PatientsPages/Insurance";
import PatientsFeedback from "../Components/HomePage/PatientsFeedback";
import { pfeedback } from "../Components/DentalFeatures";
import Footer from "../Components/HomePage/Footer";
import FAQ from "../Components/LocationsPages/FAQ";

function Patients() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash; // Get the hash from the URL
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Find the element by ID
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
      }
    }
  }, [location]);
  return (
    <div>
      <Banner />
      <section id="insurance">
        <InsuranceCoverd />
      </section>
      <section id="membership-plans">
        <Insurance />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <PatientsFeedback feedback={pfeedback} />
      <Footer />
    </div>
  );
}

export default Patients;
