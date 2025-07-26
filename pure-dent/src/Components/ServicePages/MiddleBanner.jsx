import React from "react";
import { dentalExperience } from "../DentalFeatures";

function MiddleBanner() {
  return (
    <div className="bg-primary dark:bg-dark_primary text-secondary h-full w-full p-10 lg:p-24">
      <h1 className="text-center uppercase text-4xl md:text-5xl font-extrabold lg:text-7xl">
        At Zen Dental Studio, we're committed to using the latest dental
        technology to improve your dental experience
      </h1>
      <p className="text-2xl text-center p-3 lg:text-3xl lg:p-4 lg:px-10">
        Depending on your treatment, you will find our team using any of the
        following technologies during your visit.
      </p>
      <div className="p-2 lg:p-6 lg:flex lg:gap-10 md:flex md:gap-6">
        {dentalExperience.map((each) => {
          return (
            <div
              key={each.id}
              className="text-primary dark:text-dark_primary bg-secondary my-4 p-4 rounded-sm "
            >
              <h1 className="text-2xl font-bold uppercase lg:text-4xl ">
                {each.name}
              </h1>
              <p className="lg:text-xl py-3 md:text-sm">{each.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MiddleBanner;
