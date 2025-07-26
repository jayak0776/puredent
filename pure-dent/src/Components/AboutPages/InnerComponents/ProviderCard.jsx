import React from "react";

function ProviderCard({ isOpen, onClose, details }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-65 flex justify-center items-center z-50">
      <div className="bg-primary dark:bg-dark_primary text-secondary p-6 rounded-sm w-full max-w-lg mx-4 relative overflow-y-auto max-h-[80%]">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{details.name}</h2>
        <h4 className="text-lg font-medium text-gray-600 mb-2">
          {details.title}
        </h4>
        <hr className="mb-4" />
        <h3 className="text-lg font-semibold mb-2">Education</h3>
        <p className="mb-4">{details.education}</p>
        <h3 className="text-lg font-semibold mb-2">
          What makes Zen Dental Studio special?
        </h3>
        <p>{details.special}</p>
        <h3 className="text-lg font-semibold mb-2">
          What makes you feel most zen?
        </h3>
        <p>{details.feel}</p>
        <h3 className="text-lg font-semibold mb-2">
          Your guilty pleasure food and why?
        </h3>
        <p>{details.guility}</p>
      </div>
    </div>
  );
}

export default ProviderCard;
