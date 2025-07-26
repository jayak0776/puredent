import React from "react";
import { NavLink } from "react-router-dom";
function Banner() {
  const login = window.localStorage.getItem("login");
  return (
    <div className="p-8 bg-primary dark:bg-dark_primary text-secondary h-full w-full lg:p-20 md:p-16">
      <div className="lg:w-[90%] md:w-[90%]">
        <h1 className="text-4xl font-extrabold py-4 lg:text-7xl lg:py-6 md:py-5 md:text-6xl uppercase">
          An oasis of calm, compassion and tranquility
        </h1>
        <p className="text-xl p-2 lg:text-4xl lg:p-3 md:text-3xl">
          Every member of our team is focused on ensuring you receive clear,
          compassionate, and delightful treatments - and on making sure you feel
          at home.
        </p>
        <p className="text-xl p-2 lg:text-4xl lg:p-3 md:text-3xl">
          Receive dental care in our state-of-the-art offices designed by
          experts to serve as places of comfort and relaxation.
        </p>
        <div className="flex justify-center py-4 lg:justify-normal md:justify-normal lg:p-8 md:p-5">
          {login ? (
            <button className="h-14 px-10 lg:text-xl bg-[#826ee7] text-[#FFF6E4] uppercase dark:text-dark_primary font-semibold rounded-sm hover:text-[#FFF6E4] hover:bg-shade dark:hover:bg-dark_shade dark:hover:text-dark_primary duration-300 shadow-lg shadow-shade">
              <NavLink to="/appointment/details">Book Now</NavLink>
            </button>
          ) : (
            <button className="h-14 px-10 lg:text-xl bg-[#826ee7] text-[#FFF6E4] uppercase dark:text-dark_primary font-semibold rounded-sm hover:text-[#FFF6E4] hover:bg-shade dark:hover:bg-dark_shade dark:hover:text-dark_primary duration-300 shadow-lg shadow-shade">
              <NavLink to="/login">Book Now</NavLink>
            </button>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Banner;
