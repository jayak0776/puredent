import React, { useState } from "react";
import SanGallery from "./InnerComponents/SanGallery";
import MounGallery from "./InnerComponents/MounGallery";

function Spaces() {
  const [space, setSpace] = useState(true);
  const sanHandleSpace = (p) => {
    if (!p) {
      setSpace(!space);
    }
  };
  const mounHandleSpace = (p) => {
    if (p) {
      setSpace(!space);
    }
  };
  return (
    <div className="w-full h-full text-primary dark:text-dark_primary bg-secondary p-8 lg:p-20 lg:px-32 md:p-16 md:px-20">
      <h1 className="text-4xl md:text-5xl uppercase text-center font-extrabold p-4 lg:text-7xl lg:p-10 lg:pb-5 md:p-8 md:pb-2">
        Explore our spaces
      </h1>
      <div className="lg:flex lg:justify-center md:flex md:justify-center pb-0 md:pb-3 lg:pb-6">
        <button
          className="px-3 py-2 bg-primary dark:bg-dark_primary text-secondary rounded-sm hover:dark:text-dark_primary hover:dark:bg-dark_shade hover:bg-shade hover:text-primary m-4 duration-300 lg:px-4 lg:py-3 lg:text-xl md:px-4 md:py-3 md:text-xl"
          onClick={() => sanHandleSpace(space)}
        >
          San Francisco
        </button>
        <button
          className="px-3 py-2 text-primary dark:text-dark_primary dark:bg-dark_shade hover:dark:bg-dark_primary hover:dark:text-dark_secondary bg-shade rounded-sm hover:text-shade hover:bg-primary  duration-300 lg:m-4 lg:px-4 lg:py-3 lg:text-xl md:m-4 md:px-4 md:py-3 md:text-xl"
          onClick={() => mounHandleSpace(space)}
        >
          Mountain View
        </button>
      </div>
      {space ? <SanGallery /> : <MounGallery />}
    </div>
  );
}

export default Spaces;
