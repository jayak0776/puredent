import React, { useEffect } from "react";
import Banner from "./Mountain View/Banner";
import Doctors from "./Mountain View/Doctors";
import MounNewSetter from "../LocationsPages/MounLocPages/MounNewSetter";
import Trust from "../LocationsPages/Trust";
import PatientsFeedback from "../HomePage/PatientsFeedback";
import { pfeedback } from "../DentalFeatures";
import Footer from "../HomePage/Footer";

function MountainView() {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />
      <Doctors />
      <MounNewSetter />
      <Trust />
      <PatientsFeedback feedback={pfeedback} />
      <Footer />
    </>
  );
}

export default MountainView;
