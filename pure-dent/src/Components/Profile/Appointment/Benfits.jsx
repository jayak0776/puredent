import React from "react";
import { RiToothFill } from "react-icons/ri";

function Benfits() {
  return (
    <div className="lg:w-full lg:h-[100vh] md:h-[80vh] w-full h-full bg-secondary text-primary dark:text-dark_primary lg:p-20 md:p-10 md:pb-0 p-10">
      <div className="w-full h-full md:flex md:justify-between md:gap-16 lg:gap-32 lg:items-center">
        <RiToothFill className="lg:w-[90%] lg:h-[90%] md:w-[70%] md:h-[70%] w-[70%] h-[70%] ml-10 md:ml-0" />
        <div className="lg:w-[90%] lg:h-[90%] md:w-[80%] md:h-[80%] md:mt-10 flex-col items-center md:pt-10 mt-10 p-6 md:p-0 rounded-sm bg-primary dark:bg-dark_primary text-secondary">
          <h1 className="font-extrabold text-center md:text-5xl md:pb-3 text-2xl pb-2 uppercase">
            Benfits
          </h1>
          <ul className="lg:px-10  list-disc list-inside md:pl-5 md:text-lg text-base">
            <li>
              A bright smile improves your confidence and overall appearance.
            </li>
            <li>Regular dental check-ups prevent cavities and gum disease.</li>
            <li>Good oral health supports better overall health.</li>
            <li>
              Professional cleaning removes stains and keeps teeth sparkling.
            </li>
            <li>
              Early detection of dental issues saves time, pain, and money.
            </li>
            <li>
              Fresh breath boosts social interactions and personal comfort.
            </li>
            <li>Strong teeth improve chewing and digestion.</li>
            <li>Proper dental care helps preserve natural teeth longer.</li>
            <li>A healthy mouth reduces the risk of serious infections.</li>
            <li>Regular dental visits ensure long-term oral health.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Benfits;
