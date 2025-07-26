import React from "react";
import MounGallery from "../../AboutPages/InnerComponents/MounGallery";

function Gallery() {
  return (
    <div className="bg-primary text-secondary dark:bg-dark_primary dark:text-dark_secondary p-6 px-10 md:p-10 md:px-16 lg:p-10 lg:px-20  lg:flex-col flex-center">
      <h1 className="text-center text-4xl md:text-5xl lg:text-7xl py-3 md:py-4 lg:py-6 font-extrabold uppercase">
        Mountain View
      </h1>
      <div className="md:flex md:justify-center">
        <div className="text-primary bg-secondary dark:bg-dark_secondary dark:text-dark_primary w-full md:w-[80%] py-8 md:py-10 lg:px-0 lg:py-20 rounded-sm">
          <MounGallery />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
