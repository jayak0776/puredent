import React from "react";
import "react-calendar/dist/Calendar.css";
import { ToastContainer } from "react-toastify";
import p1 from "../../../assets/dental.png";
import { NavLink } from "react-router-dom";

function Appointment() {
  return (
    <div className="lg:w-full lg:h-full md:h-full text-secondary bg-primary dark:bg-dark_primary lg:p-16 lg:px-20 md:p-20 p-10">
      <ToastContainer />
      <h1 className="lg:w-full text-center font-extrabold text-3xl mb-10 lg:text-7xl lg:mb-10 md:text-4xl md:mb-14 rounded-md uppercase">
        Book Appointment, For Your Beautiful Smile!
      </h1>
      <div className="md:flex md:justify-evenly lg:items-center lg:gap-52 md:gap-12 lg:px-20 md:px-16 px-4">
        <div className="bg-secondary text-primary dark:text-dark_primary w-full h-[20vh]  lg:w-[50%] lg:h-[30vh] lg:flex lg:justify-center lg:items-center rounded-sm">
          <div className="flex-col">
            <h1 className="lg:text-3xl font-extrabold lg:mb-7 uppercase p-6">
              Book Appointment Locations
            </h1>
            <div className="lg:flex lg:justify-around">
              <button className="bg-primary dark:bg-dark_primary text-secondary hover:bg-shade hover:text-primary dark:hover:text-dark_primary dark:hover:bg-dark_shade duration-300 rounded-sm lg:px-3 lg:py-2 shadow-lg shadow-shade">
                <NavLink to={"/location-san-francisco"}>San Francisco</NavLink>
              </button>
              <button className="bg-primary dark:bg-dark_primary text-secondary hover:bg-shade hover:text-primary dark:hover:text-dark_primary dark:hover:bg-dark_shade duration-300 rounded-sm lg:px-3 lg:py-2 shadow-lg shadow-shade">
                <NavLink to={"/location-mountain-view"}>Mountain View</NavLink>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[35%] lg:h-[70%] md:w-[40%] md:h-[70%] text-secondary lg:pt-5 md:pt-7 mt-16 md:mt-0">
          <img
            src={p1}
            alt="dentist"
            className="rounded-md shadow-shade shadow-custom-lg lg:mb-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Appointment;
