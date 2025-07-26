import React from "react";

function Trust() {
  return (
    <div className="text-primary dark:text-dark_primary bg-secondary p-10 w-full h-full md:p-16 lg:p-20 text-center">
      <h1 className="text-4xl font-extrabold md:text-5xl md:py-8 lg:text-7xl lg:py-5 lg:mb-10 uppercase">
        Led by Trust and Transparency
      </h1>
      <div className="md:grid md:grid-cols-2 md:gap-x-10 lg:gap-0">
        <div className="p-4 shadow-custom-lg rounded-sm my-5 lg:w-[90%]">
          <h1 className="text-2xl md:text-3xl font-extrabold py-2 lg:text-4xl uppercase">
            Transparent pricing
          </h1>
          <p className="text-xl pb-3">
            Understand the cost of every procedure before it begins. No more
            unexpected invoices.
          </p>
        </div>
        <div className="p-4 shadow-custom-lg rounded-sm my-5 lg:w-[90%] ">
          <h1 className="text-2xl md:text-3xl font-extrabold py-2 lg:text-4xl uppercase">
            Trust-based dentistry
          </h1>
          <p className="text-xl pb-3">
            Expect full transparency on every treatment from start to finish.
          </p>
        </div>
        <div className="p-4 shadow-custom-lg rounded-sm my-5 lg:w-[90%]">
          <h1 className="text-2xl md:text-3xl font-extrabold py-2 lg:text-4xl uppercase">
            Complete care
          </h1>
          <p className="text-xl pb-3">
            Your treatment doesn't end until you are fully satisfied with the
            care you've received.
          </p>
        </div>
        <div className="p-4 shadow-custom-lg rounded-sm my-5 lg:w-[90%]">
          <h1 className="text-2xl md:text-3xl font-extrabold py-2 lg:text-4xl uppercase">
            Highest-quality materials
          </h1>
          <p className="text-xl pb-3">
            We partner with top-rated labs and use the highest-quality materials
            so you receive the best care.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Trust;
