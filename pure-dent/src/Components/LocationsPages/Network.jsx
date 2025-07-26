import React from "react";
import p1 from "../../assets/svgtopng/p1.png";
import p2 from "../../assets/svgtopng/p2.png";
import p3 from "../../assets/svgtopng/p3.png";
import p4 from "../../assets/svgtopng/p4.png";
import p5 from "../../assets/svgtopng/p5.png";
import p6 from "../../assets/svgtopng/p6.png";

const img = [
  { id: 1, src: p1 },
  { id: 2, src: p2 },
  { id: 3, src: p3 },
  { id: 4, src: p4 },
  { id: 5, src: p5 },
  { id: 6, src: p6 },
];

function Network() {
  return (
    <div className="text-center text-primary dark:text-dark_primary bg-secondary dark:bg-dark_secondary w-full h-full p-6 px-10 md:p-10 md:px-16 lg:p-10 lg:px-20">
      <h1 className="text-4xl font-extrabold py-4 md:text-6xl lg:text-7xl lg:py-6 uppercase">
        Receive delightful treatments with an in-network provider
      </h1>
      <p className="text-xl py-2 md:text-2xl lg:py-4">
        We accept most PPO dental insurances, including Delta Dental, so our
        patients can access the best care at reasonable prices. We will also
        verify your insurance coverage and keep you informed about the cost of
        any treatment prior to your appointment so there are no surprises.
      </p>
      <p className="text-xl py-2 md:text-2xl lg:py-4">
        If you don’t have dental insurance, please get in touch to learn more
        about our membership plans.
      </p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-6 p-4 md:p-4 lg:p-0 lg:gap-0">
        {img.map((each) => {
          return (
            <div className="p-4 md:p-2 lg:px-14 lg:py-10" key={each.id}>
              <img
                src={each.src}
                alt={`Provider ${each.id}`}
                className="w-full h-auto filter brightness-95 lg:w-[70%] rounded-full shadow-custom-lg"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Network;
