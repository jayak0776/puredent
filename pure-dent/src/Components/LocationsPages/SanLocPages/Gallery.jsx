import React from "react";
import SanGallery from "../../AboutPages/InnerComponents/SanGallery";

function Gallery() {
  return (
    <div className="bg-primary dark:bg-dark_primary text-secondary dark:text-dark_secondary p-6 px-10 md:p-10 md:px-16 lg:p-10 lg:px-20  lg:flex-col flex-center">
      <h1 className="text-center text-4xl md:text-5xl lg:text-7xl py-3 md:py-4 lg:py-6 font-extrabold uppercase">
        San Francisco
      </h1>
      <div className="md:flex md:justify-center">
        <div className="text-primary dark:text-dark_primary bg-secondary dark:bg-dark_secondary w-full md:w-[80%] py-8 md:py-10 lg:px-0 lg:py-20 rounded-sm">
          <SanGallery />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
