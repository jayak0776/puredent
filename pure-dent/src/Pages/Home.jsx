import React, { useEffect } from "react";
import Banner from "../Components/HomePage/Banner";
import NewSetter from "../Components/HomePage/NewSetter";
import Experience from "../Components/HomePage/Experience";
import Gallery from "../Components/HomePage/Gallery";
import { imagesGallery, pfeedback } from "../Components/DentalFeatures";
import PatientsFeedback from "../Components/HomePage/PatientsFeedback";
import Footer from "../Components/HomePage/Footer";
import PerfectDestiny from "../Components/ServicePages/PerfectDestiny";
import Striving from "../Components/AboutPages/Striving";

function Home() {
  // console.log(pfeedback);
  // useEffect(() => {
  //   // Automatically refresh the page once when the component mounts
  //   window.location.reload();
  // }, []);
  return (
    <div>
      <Banner />
      <NewSetter />
      <Experience />
      <PerfectDestiny />
      <Striving />
      <Gallery images={imagesGallery} />
      <PatientsFeedback feedback={pfeedback} />
      <Footer />
    </div>
  );
}

export default Home;
