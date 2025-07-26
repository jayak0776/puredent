import React from "react";
import { NavLink } from "react-router-dom";

function Providers() {
  return (
    <div className="text-center text-primary dark:text-dark_primary bg-secondary w-full h-full p-10  lg:p-20 lg:px-32 md:p-16">
      <h1 className="text-4xl uppercase font-extrabold py-6 lg:text-7xl lg:py-12 lg:pb-0 md:text-5xl md:py-0">
        Our Providers
      </h1>
      <p className="text-xl lg:text-3xl lg:p-10 md:text-2xl md:p-5">
        Our staff remains at the forefront of modern dentistry and strives to
        keep you comfortable and informed, so you can be confident that you’re
        in expert hands, and view our studio as a sanctuary.
      </p>
      <div className=" lg:px-96 lg:flex lg:justify-evenly md:flex md:justify-evenly">
        <button className="px-4 py-4 text-secondary bg-primary dark:bg-dark_primary dark:text-dark_secondary text-lg rounded-sm my-6 dark:hover:text-dark_primary dark:hover:bg-dark_shade hover:bg-shade hover:text-primary duration-300">
          <NavLink to={"/sanfranscisco/doctors"}>San Franscisco</NavLink>
        </button>
        <button className="px-4 py-4 bg-shade text-primary dark:bg-dark_primary dark:text-dark_secondary text-lg rounded-sm my-6 dark:hover:text-dark_primary dark:hover:bg-dark_shade hover:bg-primary hover:text-secondary duration-300">
          <NavLink to={"/mountainview/doctors"}>Mountain View</NavLink>
        </button>
      </div>
    </div>
  );
}

export default Providers;
