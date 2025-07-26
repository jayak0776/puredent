import React, { useState } from "react";
import Standard from "./InnerPatientsPages/Standard";
import Ultimate from "./InnerPatientsPages/Ultimate";

function Insurance() {
  const [insurance, setInsurance] = useState(true);

  const handleStandard = () => {
    setInsurance(true);
  };

  const handleUltimate = () => {
    setInsurance(false);
  };

  return (
    <div className="bg-primary dark:bg-dark_primary text-secondary dark:text-dark_secondary p-6 px-10 md:p-10 md:px-16 lg:p-10 lg:px-20">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold py-3 md:text-5xl md:py-4 lg:text-7xl lg:py-6 uppercase">
          What if I don't have insurance?
        </h1>
        <p className="text-xl pb-2 md:text-2xl md:pb-4 lg:text-3xl lg:pb-6">
          Your smile deserves exceptional care—with or without insurance. Our
          membership plans have been designed to help you keep your smile
          intact.
        </p>
      </div>
      <div>
        <div className="flex p-3 font-extrabold md:justify-center md:p-5 lg:p-7">
          <button
            onClick={handleStandard}
            className="px-6 py-4 rounded-sm text-primary dark:text-dark_primary bg-secondary mx-2 md:px-8 md:py-4 md:mx-4 lg:text-xl hover:bg-shade hover:text-primary duration-300 shadow-lg shadow-shade"
          >
            Standard
          </button>
          <button
            onClick={handleUltimate}
            className="px-6 py-4 rounded-sm text-primary dark:text-dark_primary bg-secondary mx-2 md:px-8 md:py-4 md:mx-4 lg:text-xl hover:bg-shade hover:text-primary duration-300 shadow-lg shadow-shade"
          >
            Ultimate
          </button>
        </div>
        {insurance ? <Standard /> : <Ultimate />}
      </div>
    </div>
  );
}

export default Insurance;
