import React from "react";
import { NavLink } from "react-router-dom";

function Standard() {
  const login = window.localStorage.getItem("login");
  return (
    <div className="text-primary dark:text-dark_primary bg-secondary p-3 m-2 rounded-sm md:p-6 md:m-3 lg:p-8 lg:m-4 lg:w-[30%] lg:relative lg:left-[34%] shadow-2xl">
      <h1 className="text-xl font-extrabold md:text-2xl lg:text-3xl">
        $50.00/mo
      </h1>
      <p className="text-lg font-semibold md:text-xl lg:text-2xl">
        One-time setup fee: $400
      </p>
      <br />
      <p className="text-lg font-semibold md:text-xl lg:text-2xl">
        What's Included:
      </p>
      <ul className="list-disc px-4 md:text-xl lg:text-2xl">
        <li>New patient comprehensive exam</li>
        <li>Two cleanings per year</li>
        <li>20% off any additional Cleanings</li>
        <li>Intra-oral X-rays (1/yr) and emergency exams</li>
        <li>15% off all non-cosmetic treatments</li>
        <li>$300 off Invisalign</li>
        <li>10% off all veneers treatments</li>
      </ul>
      <div className="p-3 md:p-6">
        {login ? (
          <button className="py-2 px-4 bg-primary dark:hover:bg-dark_shade dark:hover:text-dark_primary dark:bg-dark_primary text-secondary rounded-sm font-extrabold md:py-3 md:px-6 md:text-lg duration-300 hover:bg-shade hover:text-primary shadow-lg shadow-shade">
            <NavLink to={"/appointment/details"}>Book Now</NavLink>
          </button>
        ) : (
          <button className="py-2 px-4 bg-primary dark:hover:bg-dark_shade dark:hover:text-dark_primary dark:bg-dark_primary text-secondary rounded-sm font-extrabold md:py-3 md:px-6 md:text-lg duration-300 hover:bg-shade hover:text-primary shadow-lg shadow-shade">
            <NavLink to={"/login"}>Book Now</NavLink>
          </button>
        )}
      </div>
    </div>
  );
}

export default Standard;
