import React from "react";

function PerfectDestiny() {
  return (
    <div className="w-full h-full text-primary dark:text-dark_primary bg-secondary p-10 lg:p-10 lg:px-24">
      <div className="p-2 lg:p-6 ">
        <h1 className="text-center text-4xl font-extrabold lg:text-7xl md:text-5xl">
          <p className="py-2 uppercase">The perfect destination</p>

          <p className="text-xl font-normal lg:text-3xl">
            for discerning patients seeking quality dental care
          </p>
        </h1>
      </div>
      <div className="lg:flex lg:gap-20 md:flex md:gap-16">
        <div className="py-6">
          <div className="py-3 lg:py-6">
            <h1 className="text-2xl font-extrabold lg:text-3xl uppercase">
              Confidence and Clarity
            </h1>
            <p className="p-2 text-xl">
              Our team is committed to fostering open, honest communication
              throughout your dental journey, ensuring you're well-informed
              about the cost and specifics of each procedure before it starts.
              And we're friendly, too.
            </p>
          </div>
          <div className="py-3">
            <h1 className="text-2xl font-extrabold lg:text-3xl uppercase">
              Exceptional Expertise
            </h1>
            <p className="p-2 text-xl">
              Our proficient and compassionate dental team stays ahead in the
              field of modern dentistry, offering delightful, personalized
              treatments adapted to your distinct requirements.
            </p>
          </div>
        </div>
        <div className="lg:py-6 md:py-6">
          <div className="py-3 lg:py-6">
            <h1 className="text-2xl font-extrabold lg:text-3xl uppercase">
              Tranquil Dentistry
            </h1>
            <p className="p-2 text-xl">
              Immerse yourself in the calming atmosphere of our contemporary
              offices, designed to diminish dental anxieties. Unwind in
              cutting-edge dental chairs while indulging in Netflix, music, or a
              warm eye mask during your treatment.
            </p>
          </div>
          <div className="py-3">
            <h1 className="text-2xl font-extrabold lg:text-3xl uppercase">
              Innovative Technology
            </h1>
            <p className="p-2 text-xl">
              We incorporate the most recent breakthroughs in dental technology,
              such as AI, digital x-rays, laser dentistry, and 3D imaging, to
              deliver outstanding care and elevate your dental experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfectDestiny;
