import React from "react";
import { NavLink } from "react-router-dom";

function Banner() {
  const login = window.localStorage.getItem("login");
  return (
    <div className="bg-primary dark:bg-dark_primary text-secondary dark:text-dark_secondary w-full h-full p-6 px-10 md:p-10 md:px-16 lg:p-10 lg:px-20">
      <div className="md:w-[95%]">
        <h1 className="text-4xl font-extrabold py-2 md:text-6xl md:py-4 lg:text-7xl uppercase">
          Top-Quality Dental Services in Mountain View
        </h1>
        <div className="lg:px-8">
          <p className="text-xl py-2 md:text-2xl md:py-2 lg:text-3xl lg:py-2">
            Bringing Smiles to the Mountain View Community.
          </p>
          <p className="text-xl py-2 md:text-2xl md:py-2 lg:text-3xl lg:py-2">
            "Conveniently located in Mountain View, our dental clinic offers
            comprehensive care for patients of all ages. Whether you’re here for
            a check-up or a specialized treatment, our team ensures that you
            receive the best care in a welcoming environment. Trust us to help
            you achieve and maintain a healthy, beautiful smile.
          </p>
          <p className="text-xl py-2 md:text-2xl md:py-2 lg:text-3xl lg:py-2">
            Visit Us in Mountain View – Book Your Appointment Today!
          </p>
          <p className="text-xl py-2 md:text-2xl md:py-2 lg:text-3xl lg:py-1">
            Come experience dental care like never before.
          </p>
          <div className="p-3 md:p-3">
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
    </div>
  );
}

export default Banner;
