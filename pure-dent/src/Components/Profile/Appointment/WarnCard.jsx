import React from "react";

function WarnCard() {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-primary text-secondary p-6 rounded-lg w-full max-w-lg mx-4 relative overflow-y-auto max-h-[80%]"></div>
      <p>Are you willing to pay for appointment ?</p>
      <div className="flex justify-between lg:px-5 lg:mt-6 md:px-0 md:mt-4 mt-6">
        <button
          onClick={previousStage}
          className="lg:px-6 lg:py-1 md:px-4 md:py-1 px-3 py-1 text-secondary bg-primary hover:text-primary hover:bg-shade duration-300 lg:text-lg rounded-sm font-medium"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="lg:px-6 lg:py-1 md:px-4 md:py-1 px-3 py-1 text-secondary bg-primary hover:text-primary hover:bg-shade duration-300 lg:text-lg rounded-sm font-medium"
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  );
}

export default WarnCard;
