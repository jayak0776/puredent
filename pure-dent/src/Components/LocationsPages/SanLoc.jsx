import React from "react";
import Banner from "./SanLocPages/Banner";
import Network from "./Network";
import Gallery from "./SanLocPages/Gallery";
import Trust from "./Trust";
import SanNewSetter from "./SanNewSetter";
import FAQ from "./FAQ";
import PatientsFeedback from "../HomePage/PatientsFeedback";
import { pfeedback } from "../DentalFeatures";
import Footer from "../HomePage/Footer";
function SanLoc() {
  return (
    <div>
      <Banner />
      <Network />
      <Gallery />
      <Trust />
      <SanNewSetter />
      <FAQ />
      <PatientsFeedback feedback={pfeedback} />
      <Footer />
    </div>
  );
}

export default SanLoc;
