import React from "react";
import { NavLink } from "react-router-dom";

function Banner() {
  const services = [
    "Comprehensive Exam and Cleaning",
    "Teeth Whitening",
    "Dental Implants",
    "Orthodontics",
    "Dental Crowns",
    "Fillings",
    "Teeth Extractions",
    "Root Canals",
  ];

  const login = window.localStorage.getItem("login");

  return (
    <div className="w-full h-full bg-primary dark:bg-dark_primary text-secondary p-5 lg:p-10 lg:px-20 md:p-10 md:px-16">
      <h1 className="text-4xl p-2 uppercase font-extrabold lg:text-7xl lg:p-6 md:text-5xl md:p-2">
        Embrace Quality Dental Care at Zen Dental Studio
      </h1>
      <p className="text-xl p-2 lg:text-3xl lg:p-8 md:text-2xl md:p-3">
        Zen Dental Studio is here to help you achieve optimal dental health in a
        tranquil, rejuvenating environment.
      </p>
      <p className="text-xl p-2 lg:text-3xl lg:p-8 lg:pt-0 md:text-2xl md:p-3">
        Our kind and compassionate team, along with state-of-the-art technology,
        ensure that every visit to our San Francisco and Mountain View offices
        is a source of serenity, not anxiety.
      </p>
      <p className="text-xl p-2 lg:text-3xl lg:p-8 lg:pt-0 md:text-2xl md:p-3">
        Experience modern, compassionate dental care that nurtures your smile
        and well-being.
      </p>

      <div className="py-2 pl-3 md:py-5 md:pl-5">
        {login ? (
          <button className="h-12 px-5 md:h-14 md:px-10  md:text-xl bg-[#826ee7] text-[#FFF6E4] dark:text-dark_primary font-semibold rounded-sm hover:text-[#FFF6E4] hover:bg-shade dark:hover:bg-dark_shade dark:hover:text-dark_primary duration-300 shadow-lg shadow-shade">
            <NavLink to="/appointment/details">Book Now</NavLink>
          </button>
        ) : (
          <button className="h-12 px-5 md:h-14 md:px-10 md:text-xl bg-[#826ee7] text-[#FFF6E4] dark:text-dark_primary font-semibold rounded-sm hover:text-[#FFF6E4] hover:bg-shade dark:hover:bg-dark_shade dark:hover:text-dark_primary duration-300 shadow-lg shadow-shade">
            <NavLink to="/login">Book Now</NavLink>
          </button>
        )}
      </div>
      <br />
      <br className="hidden lg:visible" />
      <h1 className="text-3xl font-extrabold px-2 md:px-4 uppercase py-0 md:py-2 pt-8 lg:text-6xl md:text-5xl">
        General Dentistry Services
      </h1>
      <div className="grid grid-cols-2 px-4 gap-4 py-5 lg:grid-cols-3 lg:gap-10 lg:py-10 md:grid-cols-3 md:gap-10 md:py-5 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full h-full shadow-custom-lg flex justify-center items-center text-center font-semibold p-4 md:p-6  lg:p-10 lg:shadow-shade dark:shadow-brand-dark rounded-sm text-primary dark:text-dark_primary bg-secondary"
          >
            <h1 className="lg:text-2xl">{service}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
