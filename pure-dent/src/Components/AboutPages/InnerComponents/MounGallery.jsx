import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { imagesGallery1 } from "../../DentalFeatures";

function MounGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesGallery1.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagesGallery1.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full lg:w-3/4 mx-auto overflow-hidden">
      {/* Slider container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {imagesGallery1.map((image, index) => (
          <div
            key={index}
            className="w-full h-44 lg:h-72 flex-shrink-0 flex items-center justify-center"
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="object-cover w-[65%] h-[70%] lg:w-[60%] md:h-full rounded-sm shadow-md transition-all duration-300 transform  filter brightness-75"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 transform -translate-y-1/2 -left-0 md:left-8 lg:left-20">
        <button
          onClick={prevSlide}
          className="bg-primary text-secondary text-2xl lg:text-3xl p-2 rounded-full hover:bg-shade hover:text-primary duration-300"
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 -right-0 md:right-8 lg:right-20">
        <button
          onClick={nextSlide}
          className="bg-primary text-secondary text-2xl lg:text-3xl p-2 rounded-full hover:bg-shade hover:text-primary duration-300"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center space-x-2 mt-0 md:mt-4">
        {imagesGallery1.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-primary" : "bg-shade"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default MounGallery;
