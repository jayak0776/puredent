import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-secondary lg:p-32 lg:py-12">
      <h1 className="text-4xl px-6 py-10  pb-3 md:pb-4 lg:pb-7 uppercase md:text-5xl lg:text-7xl font-extrabold text-center text-primary dark:text-dark_primary ">
        A place for transformation
      </h1>
      <p className="text-xl lg:text-2xl text-primary dark:text-dark_primary text-center p-10 pt-0 pb-4 md:pb-5 lg:pb-7">
        Receive exceptional dental care within spaces designed for <br />{" "}
        personal rejuvenation and renewal
      </p>

      {/* Image Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full h-44 lg:w-full md:h-44 lg:h-72 flex-shrink-0 flex items-center justify-center rounded-sm"
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="object-cover w-[80%] md:w-[50%] lg:w-[50%] h-full rounded-sm shadow-lg shadow-primary dark:shadow-brand-dark filter brightness-75"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center p-10 ">
        <button
          onClick={prevSlide}
          className="bg-primary dark:bg-dark_primary text-secondary text-2xl lg:text-3xl mx-2 p-2 rounded-sm hover:bg-secondary dark:hover:bg-dark_secondary dark:hover:text-dark_primary hover:text-primary duration-300"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-primary dark:bg-dark_primary text-secondary text-2xl lg:text-3xl mx-2 p-2 rounded-sm hover:bg-secondary dark:hover:bg-dark_secondary dark:hover:text-dark_primary hover:text-primary duration-300"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
