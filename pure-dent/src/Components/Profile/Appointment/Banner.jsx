import React from "react";
import { FaUserDoctor } from "react-icons/fa6";

function Banner() {
  return (
    <div className="w-full h-full bg-secondary dark:text-dark_primary text-primary lg:p-16 lg:px-20 md:p-10 md:px-16 p-6">
      <div className="w-full h-full md:flex md:justify-evenly  md:items-center">
        <h1 className="lg:text-7xl py-6 md:py-0 text-center md:text-start font-extrabold md:text-4xl text-3xl uppercase">
          A healthy smile is a reflection of a healthy life. Let us help you
          shine with confidence every day!
        </h1>
        <FaUserDoctor className="lg:w-full lg:h-full md:w-[90%] md:h-[90%] w-[40%] h-[40%] ml-24 md:md-0" />
      </div>
    </div>
  );
}

export default Banner;
