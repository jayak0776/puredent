import React from "react";
import { FaStar } from "react-icons/fa";
function NewSetter() {
  return (
    <div className="bg-[#826ee7] h-full w-full flex-col p-7 lg:flex-row lg:justify-between lg:p-16 text-[#FFF6E4] dark:text-dark_primary">
      <h1 className="text-xl text-center pt-1 lg:text-2xl lg:pt-3 uppercase font-extrabold">
        Two Bay Area dental offices worth smiling about
      </h1>
      <div>
        <h3 className="text-xl pt-4  lg:text-2xl text-center">San Francisco</h3>
        <div className="flex flex-row justify-center">
          <FaStar style={{ color: "gold", paddingTop: "3px" }} />
          <FaStar style={{ color: "gold", paddingTop: "3px" }} />
          <FaStar style={{ color: "gold", paddingTop: "3px" }} />
          <FaStar style={{ color: "gold", paddingTop: "3px" }} />
          <FaStar style={{ color: "gold", paddingTop: "3px" }} />
          <p className="px-2 py-0">on Yelp & Google</p>
        </div>
      </div>
      <div>
        <h3 className="text-xl pt-4  lg:text-2xl text-center">Mountain View</h3>
        <div className="flex flex-row justify-center">
          <FaStar style={{ color: "gold", paddingTop: "3px" }} />
          <FaStar style={{ color: "gold", paddingTop: "3px" }} />
          <FaStar style={{ color: "gold", paddingTop: "3px" }} />
          <FaStar style={{ color: "gold", paddingTop: "3px" }} />
          <FaStar style={{ color: "gold", paddingTop: "3px" }} />
          <p className="px-2 py-0">on Yelp & Google</p>
        </div>
      </div>
    </div>
  );
}

export default NewSetter;
