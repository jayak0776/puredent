import React from "react";
import { RxTransparencyGrid } from "react-icons/rx";
import { SlBadge } from "react-icons/sl";
import { BsBoxSeam } from "react-icons/bs";
import { SiMinds } from "react-icons/si";

function Striving() {
  return (
    <div className="bg-primary dark:bg-dark_primary text-secondary w-full h-full p-10 lg:p-20 lg:px-32 md:p-16 md:px-10">
      <h1 className="text-4xl font-extrabold uppercase text-center py-4 lg:text-7xl lg:py-8 md:text-5xl md:py-10">
        What we’re striving for
      </h1>
      <p className="text-2xl lg:text-4xl md:text-3xl md:px-4">
        At Zen Dental Studio, nothing is more important than the highest quality
        of care. Since day one, we have been committed to our values so each of
        our patients can rest assured they are in good hands.
      </p>
      <div className="lg:flex lg:p-10 md:flex md:p-6">
        <div>
          <div className="flex justify-between p-2 md:p-4">
            <p className="text-4xl pr-2 font-extrabold">
              <RxTransparencyGrid />
            </p>
            <div>
              <h1 className="text-xl px-2 md:px-4 uppercase font-extrabold">
                Transparency
              </h1>
              <p className="text-lg px-2 md:px-4">
                The best patient is an educated patient. ‍ You deserve full
                transparency, so we carefully explain each treatment every step
                of the way. We'll make sure you know why you are being
                prescribed a treatment and the precise cost of every procedure
                before it begins. And your treatment doesn't end until you are
                fully satisfied with the care you've received and given us the
                thumbs up.
              </p>
            </div>
          </div>
          <div className="flex justify-between p-4">
            <p className="text-4xl pr-2 font-extrabold">
              <SlBadge />
            </p>
            <div>
              <h1 className="font-extrabold text-xl px-4 uppercase">
                Excellence
              </h1>
              <p className="text-lg px-4">
                You deserve exceptional dental care, so we tackle every
                treatment with our full attention and expertise. Our
                state-of-the-art dental equipment allows us to better diagnose
                your specific needs, and treat them quickly and painlessly. And
                you'll be in good hands. Our doctors complete hundreds of hours
                of additional training each year, perfecting their skills and
                incorporating the latest developments in dental medicine.
              </p>
            </div>
          </div>
        </div>
        <div className="h-96 border-l-2 border-secondary hidden lg:h-96 lg:my-16 sm:block md:h-[70vh] md:my-20 "></div>
        <div>
          <div>
            <div className="flex justify-between p-4">
              <p className="text-4xl pr-2 font-extrabold">
                <BsBoxSeam />
              </p>
              <div>
                <h1 className="font-extrabold text-xl px-4 uppercase">
                  Seamless Service
                </h1>
                <p className="text-lg px-4">
                  A trip to the dentist’s office should be a source of serenity,
                  not anxiety. We’ve cut out the paperwork and streamlined the
                  entire dentist experience. Book your appointments and complete
                  your forms online. Check in on an iPad when you arrive, and
                  receive a clearly itemized invoice before you leave. Need an
                  escape during your treatment? Watch Netflix or Hulu while we
                  work our magic.
                </p>
              </div>
            </div>
            <div className="flex justify-between p-4">
              <p className="text-4xl pr-2 font-extrabold">
                <SiMinds />
              </p>
              <div>
                <h1 className="font-extrabold text-xl px-4 uppercase">
                  Mindfulness
                </h1>
                <p className="text-lg px-4">
                  Beautiful smiles begin on the inside, which is why our
                  commitment to exceptional dentistry demands we honor your soul
                  as well. We have designed spaces that serve as an oasis of
                  escape, with modern, thoughtful design as well as quiet spaces
                  to help you achieve mindfulness and tranquility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Striving;
