import React from "react";
// import bannerimg from "../../assets/banner.jpeg";
import { NavLink } from "react-router-dom";
import p1 from "../../assets/dental.png";

function Banner() {
  const login = window.localStorage.getItem("login");
  return (
    <div className="bg-[#FFF6E4] dark:bg-dark_primary w-full h-full p-6 flex flex-col md:flex-row md:justify-between md:p-10 md:px-16 lg:p-10 lg:px-20">
      <div className="text-[#826ee7] dark:text-dark_secondary flex flex-col justify-center">
        <h1 className="text-5xl py-3 md:text-5xl lg:text-7xl lg:py-9 font-extrabold uppercase">
          Exceptional Dental Care for a Lifetime of Smiles
        </h1>
        <p className="text-xl py-1 md:text-xl lg:text-3xl lg:py-2">
          At Pure Dent, we are committed to delivering personalized dental
          solutions that meet your unique needs. Whether it's routine checkups,
          cosmetic dentistry, or advanced dental treatments, our team of
          experienced professionals ensures you receive the highest quality care
          in a warm and friendly environment."
        </p>
        <p className="text-xl py-1 md:text-xl lg:text-2xl lg:py-1">
          Schedule Your Appointment Today and Experience the Difference!
        </p>
        <div className="flex flex-col md:flex-row md:space-x-4 mt-6">
          {login ? (
            <button className="h-14 px-10 lg:text-xl bg-[#826ee7] uppercase text-[#FFF6E4] dark:text-dark_primary font-semibold rounded-sm hover:text-[#FFF6E4] hover:bg-shade dark:hover:bg-dark_shade dark:hover:text-dark_primary duration-300 shadow-lg shadow-shade">
              <NavLink to="/appointment/details">Book Now</NavLink>
            </button>
          ) : (
            <button className="h-14 px-10 lg:text-xl uppercase bg-[#826ee7] text-[#FFF6E4] dark:text-dark_primary font-semibold rounded-sm hover:text-[#FFF6E4] hover:bg-shade dark:hover:bg-dark_shade dark:hover:text-dark_primary duration-300 shadow-lg shadow-shade">
              <NavLink to="/login">Book Now</NavLink>
            </button>
          )}
        </div>
      </div>
      <img
        src={p1}
        alt="Dental Studio"
        className=" filter brightness-100 md:w-[30%] md:h-[30vh] md:mt-20 lg:w-[30%] lg:h-[70vh] md:ml-4 lg:ml-4 lg:mt-8 mt-6 mx-1 rounded-sm shadow-md shadow-shade"
      />
    </div>
  );
}

export default Banner;
