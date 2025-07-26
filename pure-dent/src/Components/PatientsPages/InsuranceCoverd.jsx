import React from "react";
import p1 from "../../assets/svgtopng/p1.png";
import p2 from "../../assets/svgtopng/p2.png";
import p3 from "../../assets/svgtopng/p3.png";
import p4 from "../../assets/svgtopng/p4.png";
import p5 from "../../assets/svgtopng/p5.png";
import p6 from "../../assets/svgtopng/p6.png";

const img = [
  {
    id: 1,
    src: p1,
  },
  {
    id: 2,
    src: p2,
  },
  {
    id: 3,
    src: p3,
  },
  {
    id: 4,
    src: p4,
  },
  {
    id: 5,
    src: p5,
  },
  {
    id: 6,
    src: p6,
  },
];

function InsuranceCoverd() {
  return (
    <div className="text-primary dark:text-dark_primary bg-secondary w-full h-full text-center p-6 px-10 md:p-10 md:px-16 mx-auto lg:p-10 lg:px-20">
      <div>
        <h1 className="text-4xl font-extrabold py-3 md:text-6xl md:py-5 lg:text-7xl lg:py-7 uppercase">
          Is my insurance covered?
        </h1>
        <p className="text-lg pb-2 md:text-2xl lg:text-4xl">
          We are in-network with most dental insurance providers. If you have
          dental insurance, you're most likely covered.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 p-4 md:p-6 lg:p-10">
        {img.map((each) => {
          return (
            <div className="p-4 md:p-6 lg:px-14 lg:py-10" key={each.id}>
              <img
                src={each.src}
                alt="Provider 1"
                className="w-full h-auto filter brightness-90 lg:w-[70%] rounded-full shadow-2xl "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InsuranceCoverd;
