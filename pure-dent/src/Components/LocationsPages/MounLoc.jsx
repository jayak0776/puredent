import React from "react";
import Banner from "./MounLocPages/Banner";
import Network from "./Network";
import Gallery from "./MounLocPages/Gallery";
import Trust from "./Trust";
import MounNewSetter from "./MounLocPages/MounNewSetter";
import FAQ from "./FAQ";
import PatientsFeedback from "../HomePage/PatientsFeedback";
import { pfeedback } from "../DentalFeatures";
import Footer from "../HomePage/Footer";

function MounLoc() {
  return (
    <div>
      <Banner />
      <Network />
      <Gallery />
      <Trust />
      <MounNewSetter />
      <FAQ />
      <PatientsFeedback feedback={pfeedback} />
      <Footer />
    </div>
  );
}

export default MounLoc;
