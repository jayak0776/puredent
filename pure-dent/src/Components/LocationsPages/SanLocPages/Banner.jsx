import React from "react";
import { NavLink } from "react-router-dom";

function Banner() {
  const login = window.localStorage.getItem("login");
  return (
    <div className="bg-primary dark:bg-dark_primary text-secondary dark:text-dark_secondary w-full h-full p-6 px-10 md:p-10 md:px-16 lg:p-10 lg:px-20">
      <div className="md:w-[95%]">
        <h1 className="text-4xl font-extrabold py-2 md:text-6xl md:py-4 lg:text-7xl uppercase">
          Dentistry, done differently
        </h1>
        <p className="text-xl py-2 md:text-2xl md:py-2 lg:text-3xl lg:py-4">
          Step into a world of sleek sophistication and serene tranquility at
          our modern, zen-themed dental office in downtown San Francisco.
        </p>
        <p className="text-xl py-2 md:text-2xl md:py-2 lg:text-3xl lg:py-4">
          Our state-of-the-art facility is designed to transport you to a place
          of relaxation and rejuvenation, while our team of expert dental
          professionals is focused on providing you with top-notch care.
        </p>
        <p className="text-xl py-2 md:text-2xl md:py-2 lg:text-3xl lg:py-4">
          Whether you're in for a routine checkup or a complex treatment, you'll
          appreciate our commitment to modern dentistry and the calming
          atmosphere that surrounds you.
        </p>
        <p className="text-xl py-2 md:text-2xl md:py-2 lg:text-3xl lg:py-4">
          Come experience dental care like never before.
        </p>

        <div className="p-3 md:p-6">
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
    </div>
  );
}

export default Banner;
