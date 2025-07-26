import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const PatientsFeedback = ({ feedback }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedback.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedback.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-primary dark:bg-dark_primary lg:p-32 lg:py-10">
      <h1 className="text-4xl p-10 pb-3 md:text-5xl lg:text-7xl uppercase font-extrabold text-center text-secondary  md:pb-0">
        Our patients love us!
      </h1>
      <p className="text-xl lg:text-3xl text-secondary  text-center p-10 pt-0 md:pt-3 pb-5 md:pb-3 lg:pb-14">
        ...and their new smiles :)
      </p>

      {/* Feedback Slide */}
      <div className="flex items-center justify-center h-[100%]">
        <div className="bg-secondary text-primary dark:text-dark_primary w-[85%] h-[90%] md:w-[65%]  lg:w-[47%] lg:h-[60%] p-8 rounded-sm">
          <p className="text-xl lg:text-2xl italic">
            "{feedback[currentIndex].description}"
          </p>
          <h4 className="text-right text-lg font-semibold mt-4">
            - {feedback[currentIndex].name}
          </h4>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex flex-row items-center justify-center p-10">
        <button
          onClick={prevSlide}
          className="bg-secondary text-primary dark:text-dark_primary  text-3xl mx-2 p-2 rounded-sm hover:bg-primary dark:hover:bg-dark_primary hover:text-secondary dark:hover:text-secondary duration-300"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-secondary text-primary dark:text-dark_primary  text-3xl mx-2 p-2 rounded-sm hover:bg-primary dark:hover:bg-dark_primary hover:text-secondary dark:hover:text-secondary duration-300"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PatientsFeedback;
