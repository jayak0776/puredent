import React from "react";
import { NavLink } from "react-router-dom";

function Banner() {
  const login = window.localStorage.getItem("login");
  return (
    <div className="w-full h-full bg-primary dark:bg-dark_primary text-secondary dark:text-dark_secondary p-6 px-10 md:p-10 md:px-16 lg:p-10 lg:px-20">
      <div className="w-[90%]">
        <h1 className="text-4xl font-extrabold py-2 md:text-5xl md:py-6 lg:text-7xl uppercase lg:pb-8">
          Welcome to Pure Dent - Your Smile, Our Priority!
        </h1>
        <p className="text-2xl pb-2 md:text-3xl md:pb-4 lg:text-4xl lg:pb-6">
          At Pure Dent, we are committed to making your dental visits as
          comfortable and personalized as possible. Whether you're here for a
          routine check-up, cosmetic dentistry, or specialized treatments, our
          experienced team is here to take care of all your dental needs with
          state-of-the-art technology and patient-centered care.
        </p>
        <p className="text-2xl pt-2 md:text-3xl md:pt-0 lg:text-4xl lg:pt-0">
          Book Your Appointment Today!
        </p>
        <div className="flex flex-col md:flex-row md:space-x-4 mt-6">
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
