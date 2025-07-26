import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"; // To get the URL hash

import Banner from "../Components/AboutPages/Banner";
import Providers from "../Components/AboutPages/Providers";
import Striving from "../Components/AboutPages/Striving";
import Spaces from "../Components/AboutPages/Spaces";
import Footer from "../Components/AboutPages/Footer";

const AboutUs = () => {
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
    <>
      <Banner />
      <section id="providers">
        <Providers />
      </section>
      <section id="our-values">
        <Striving />
      </section>
      <section id="our-offices">
        <Spaces />
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
