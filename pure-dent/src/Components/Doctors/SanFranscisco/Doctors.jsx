import React, { useState } from "react";
import { sanFranciscoDoctors } from "../../DentalFeatures";
import ProviderCard from "../../AboutPages/InnerComponents/ProviderCard";

function Doctors() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);

  const handleOpenModal = (provider) => {
    setSelectedProvider(provider);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProvider(null);
  };

  return (
    <div className="lg:p-20 md:p-16 p-8 bg-secondary text-primary dark:text-dark_primary w-full h-full">
      <h1 className="text-center md:text-5xl lg:text-7xl text-4xl font-extrabold mb-1 md:mb-4 lg:mb-8 uppercase">
        Our Dental Experts
      </h1>
      <p className="lg:text-2xl md:text-xl md:mb-10  text-lg text-center p-2 lg:mb-12 lg:p-5">
        At our practice, we take pride in having a team of dedicated dental
        professionals who are passionate about providing the best possible care
        for our patients. Our doctors bring a wealth of experience and expertise
        to every appointment, ensuring that you receive the highest quality of
        dental care, personalized to your needs. Meet our team below and learn
        more about their specialties.
      </p>

      <div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-4 md:gap-8 md:p-4 lg:p-7">
          {sanFranciscoDoctors.map((each) => (
            <div
              key={each.id}
              className=" bg-primary dark:bg-dark_primary text-secondary rounded-sm shadow-lg  shadow-shade"
            >
              <div className="relative w-full lg:h-[68%] p-2 md:p-3 lg:p-4 lg:pb-0 lg:flex lg:justify-center">
                <img
                  src={each.img}
                  alt={each.name}
                  className="w-full h-full object-fill rounded-md"
                />
              </div>
              <div className="p-4 lg:pb-0">
                <h3 className="text-center text-sm md:text-xl font-extrabold uppercase mb-1 md:mb-2">
                  {each.name}
                </h3>
                <p className="text-center text-[12px] md:text-lg font-semibold mb-3 md:mb-4">
                  {each.title}
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={() => handleOpenModal(each)}
                    className="text-primary dark:text-dark_primary bg-secondary text-sm md:text-lg py-1 px-2 md:py-2 md:px-6 rounded-sm hover:bg-shade transition duration-300"
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {isModalOpen && selectedProvider && (
          <ProviderCard
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            details={selectedProvider}
          />
        )}
      </div>
    </div>
  );
}

export default Doctors;
