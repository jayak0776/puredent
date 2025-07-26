import React from "react";
import { NavLink } from "react-router-dom";

function Banner() {
  const login = window.localStorage.getItem("login");
  return (
    <div className="bg-primary dark:bg-dark_primary text-secondary dark:text-dark_secondary w-full h-full p-6 px-10 md:p-10 md:px-16 lg:p-10 lg:px-20">
      <div className="md:w-[95%]">
        <h1 className="text-4xl font-extrabold py-2 md:text-6xl md:py-4 lg:text-7xl uppercase">
          Your modern dental sanctuary in Mountain View
        </h1>
        <p className="text-xl py-2 md:text-2xl md:py-2 lg:text-3xl lg:py-4">
          Indulge in exceptional dental care at our modern, cutting-edge dental
          facility, perfectly situated to serve patients from Mountain View,
          Palo Alto, and Los Altos.
        </p>
        <p className="text-xl py-2 md:text-2xl md:py-2 lg:text-3xl lg:py-4">
          Our expert team of dental professionals is dedicated to providing you
          with the highest quality of care in an environment designed to soothe
          and inspire.
        </p>
        <p className="text-xl py-2 md:text-2xl md:py-2 lg:text-3xl lg:py-4">
          From routine cleanings to cosmetic and more complex treatments, trust
          us to deliver the exceptional dental experience you deserve.
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
