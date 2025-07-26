import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  const login = window.localStorage.getItem("login");
  return (
    <div className="text-secondary w-full h-full bg-primary dark:bg-dark_primary">
      <h1 className="text-center text-2xl px-10 py-6 pb-0 lg:text-7xl lg:px-32 lg:py-12 lg:pb-0 font-extrabold">
        PURE DENT
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-evenly">
        <div className="px-6 py-8 lg:px-32 lg:py-16">
          <h1 className="text-xl pb-1 lg:text-3xl text-center font-semibold lg:pb-2 uppercase">
            San Francisco Dental Studio
          </h1>
          <hr className="border-1 border-shade" />
          <div className="flex">
            <div className="p-3 lg:p-8">
              <p className="p-1">hello@zendentalsf.com</p>
              <p className="p-1">+1 415-857-0150</p>
              <p className="p-1">Get Directions</p>
            </div>
            <div className="p-3 lg:p-8">
              <p className="p-1">254 5th St San Francisco CA 94103</p>
              <p className="p-1">Hours</p>
              <p className="p-1">
                Mon, Tue, Fri: 8am-5pm
                <br /> Wed, Thu: 9am-6pm
              </p>
            </div>
          </div>
          {login ? (
            <button className="text-base px-4 md:text-xl lg:text-2xl h-12 lg:px-6 bg-secondary text-primary dark:bg-secondary dark:text-dark_primary dark:hover:duration-300 rounded-sm dark:hover:bg-shade dark:hover:text-dark_primary dark:duration-400 hover:bg-[#a99ce8] duration-300 ">
              <NavLink to="/appointment/details">Book a consultation</NavLink>
            </button>
          ) : (
            <button className="text-base px-4 md:text-xl lg:text-2xl h-12 lg:px-6 bg-secondary text-primary dark:bg-secondary dark:text-dark_primary dark:hover:duration-300 rounded-sm dark:hover:bg-shade dark:hover:text-dark_primary dark:duration-400 hover:bg-[#a99ce8] duration-300 ">
              <NavLink to="/login">Book a consultation</NavLink>
            </button>
          )}
        </div>
        <div className="px-6 py-8 lg:px-32 lg:py-16">
          <h1 className="text-xl pb-1 lg:text-3xl text-center font-semibold lg:pb-2 uppercase">
            Mountain View Dental Studio
          </h1>
          <hr className="border-1 border-shade" />
          <div className="flex">
            <div className="p-3 lg:p-8">
              <p className="p-1">hello@zendentalsf.com</p>
              <p className="p-1">+1 415-857-0150</p>
              <p className="p-1">Get Directions</p>
            </div>
            <div className="p-3 lg:p-8">
              <p className="p-1">254 5th St San Francisco CA 94103</p>
              <p className="p-1">Hours</p>
              <p className="p-1">
                Mon, Tue, Fri: 8am-5pm
                <br /> Wed, Thu: 9am-6pm
              </p>
            </div>
          </div>
          {login ? (
            <button className="text-base px-4 md:text-xl lg:text-2xl h-12 lg:px-6 bg-secondary text-primary dark:bg-secondary dark:text-dark_primary dark:hover:duration-300 rounded-sm dark:hover:bg-shade dark:hover:text-dark_primary dark:duration-400 hover:bg-[#a99ce8] duration-300 ">
              <NavLink to="/appointment/details">Book a consultation</NavLink>
            </button>
          ) : (
            <button className="text-base px-4 md:text-xl lg:text-2xl h-12 lg:px-6 bg-secondary text-primary dark:bg-secondary dark:text-dark_primary dark:hover:duration-300 rounded-sm dark:hover:bg-shade dark:hover:text-dark_primary dark:duration-400 hover:bg-[#a99ce8] duration-300 ">
              <NavLink to="/login">Book a consultation</NavLink>
            </button>
          )}
        </div>
      </div>
      <hr className="w-[70%] mx-auto border-1 border-shade" />
      <div className="flex items-center justify-center p-5">
        <p className="text-lg lg:text-2xl text-center pb-4">
          Dentist in San Francisco and Mountain View • © Zen Dental Studio • All
          Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
