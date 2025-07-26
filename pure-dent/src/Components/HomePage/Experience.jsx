import React from "react";
import { NavLink } from "react-router-dom";

import { dentalFeatures } from "../DentalFeatures";
function Experience() {
  const login = window.localStorage.getItem("login");
  return (
    <div className="bg-[#FFF6E4] dark:bg-dark_primary p-10 w-full h-full lg:p-32 lg:py-20">
      <h1 className="text-[#826ee7] text-center text-4xl uppercase md:text-5xl lg:text-7xl lg:pb-10 font-extrabold">
        A trip to the dentist’s office should be a source of serenity, not
        anxiety
      </h1>
      <p className="text-[#826ee7] text-center text-xl  md:text-2xl p-2 lg:px-0 lg:text-2xl">
        Here's how Zen Dental Studio delivers a patient experience like no other
      </p>
      <div className="h-full w-full flex flex-col items-center justify-center md:pl-8">
        <div className="h-full md:grid md:grid-cols-2 lg:gap-2">
          {dentalFeatures.map((each) => (
            <div
              key={each.id}
              className="bg-[#826ee7] text-[#FFF6E4] dark:text-dark_primary m-4 w-[88%] p-5 rounded-sm shadow-lg shadow-shade dark:shadow-brand-dark lg:m-5 lg:w-[90%]"
            >
              <h1 className="text-lg md:text-xl uppercase font-extrabold">
                {each.title}
              </h1>
              <p className="py-1">{each.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-5 lg:p-14">
        {login ? (
          <button className="h-14 px-10 lg:text-xl bg-[#826ee7] text-[#FFF6E4] dark:text-dark_primary font-semibold rounded-sm hover:text-[#FFF6E4] hover:bg-shade dark:hover:bg-dark_shade dark:hover:text-dark_primary duration-300 shadow-lg shadow-shade">
            <NavLink to="/appointment/details">Book Now</NavLink>
          </button>
        ) : (
          <button className="h-14 px-10 lg:text-xl bg-[#826ee7] text-[#FFF6E4] dark:text-dark_primary font-semibold rounded-sm hover:text-[#FFF6E4] hover:bg-shade dark:hover:bg-dark_shade dark:hover:text-dark_primary duration-300 shadow-lg shadow-shade">
            <NavLink to="/login">Book Now</NavLink>
          </button>
        )}
      </div>
    </div>
  );
}

export default Experience;
