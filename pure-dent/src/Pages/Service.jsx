import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../Components/ServicePages/Banner";
import PerfectDestiny from "../Components/ServicePages/PerfectDestiny";
import MiddleBanner from "../Components/ServicePages/MiddleBanner";
import GeneralServices from "../Components/ServicePages/GeneralServices";
import Footer from "../Components/ServicePages/Footer";

function Service() {
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
      <section id="general-dentistry-service">
        <Banner />
      </section>
      <section id="destination">
        <PerfectDestiny />
      </section>
      <section id="technologies">
        <MiddleBanner />
      </section>
      <section id="more">
        <GeneralServices />
      </section>
      <Footer />
    </div>
  );
}

export default Service;
