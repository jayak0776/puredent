import React, { useState } from "react";
import {
  questions1,
  questions2,
  questions3,
  questions4,
  questions5,
} from "../DentalFeatures";

function GeneralServices() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <div className="text-primary dark:text-dark_primary bg-secondary w-full h-full p-10 lg:p-24 md:p-16">
      <h1 className="text-3xl text-center font-extrabold uppercase lg:text-7xl md:text-5xl">
        General Dentistry Services
      </h1>
      <p className="text-lg p-3 text-center lg:text-2xl lg:pb-10 md:text-xl md:pb-10">
        Zen Dental Studio is the one-stop shop for all your general dentistry
        needs
      </p>
      <div className="lg:flex lg:gap-0 md:flex md:gap-14">
        <div className="lg:p-6 lg:pr-10 lg:pl-0">
          <h1 className="text-2xl font-extrabold py-2 lg:text-5xl lg:px-10 md:text-3xl uppercase">
            Comprehensive Exam and Cleaning
          </h1>
        </div>
        <div className="lg:p-10">
          <h1 className="text-xl font-semibold pb-2 lg:text-3xl md:text-2xl">
            Maintain Excellent Oral Health with our General Dentistry Services
          </h1>
          <p className="pb-2 lg:text-lg md:text-lg">
            A comprehensive exam and cleaning are essential for maintaining
            optimal dental health. Our experienced dental professionals provide
            thorough examinations and gentle cleanings, tailored to your unique
            needs. We emphasize patient education and personalized care,
            empowering you to take control of your dental health.
          </p>
          <h1 className="text-xl font-semibold lg:text-3xl md:text-2xl">
            The Process
          </h1>
          <p className="pb-2 lg:text-lg md:text-lg">
            During your visit, our skilled hygienists will gently clean your
            teeth, removing plaque and tartar to prevent gum disease and tooth
            decay. Next, our dental professionals will examine your teeth, gums,
            and jaw for any signs of dental issues and will work with you to
            develop a customized preventive care plan based on your specific
            dental health needs and risk factors.
          </p>
          <hr className="border-primary dark:border-dark_shade" />
          <div className="w-full max-w-lg ">
            {questions1.map((faq, index) => (
              <div key={index} className="faq border-b border-shade py-4">
                <div
                  className="faq-question text-lg font-semibold cursor-pointer"
                  onClick={() => toggleQuestion(index)}
                >
                  {faq.question}
                </div>
                <div
                  className={`faq-answer mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
                    selectedQuestion === index
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="py-2">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-primary dark:border-dark_primary" />
      <div className="lg:flex lg:gap-56 md:flex md:gap-44 md:pt-10">
        <div className="lg:p-6 ">
          <h1 className="text-2xl font-extrabold py-2 lg:text-5xl lg:px-6 md:text-3xl uppercase">
            Dental Crowns
          </h1>
        </div>
        <div className="lg:p-6">
          <h1 className="text-xl font-semibold pb-2 lg:text-3xl md:text-2xl">
            Restore Tooth Strength with Custom Dental Crowns at Zen Dental
            Studio
          </h1>
          <p className="pb-2 lg:text-lg md:text-lg">
            Dental crowns are custom-made caps designed to restore the strength
            and appearance of damaged teeth. Zen Dental Studio offers dental
            crowns that seamlessly blend with your natural smile, providing you
            with a durable and aesthetically pleasing solution. Our experienced
            dental team uses advanced technology, such as 3D imaging and
            scanners, to create custom dental crowns that perfectly match your
            surrounding teeth.
          </p>
          <h1 className="text-xl font-semibold lg:text-3xl md:text-2xl">
            The Process
          </h1>
          <p className="pb-2 lg:text-lg md:text-lg">
            During your visit, our team will prepare the affected tooth, take
            detailed digital impressions, and create a temporary crown. Once
            your custom crown is ready, we'll place it over your tooth and
            ensure a comfortable, secure fit.
          </p>
          <hr className="border-primary dark:border-dark_shade" />
          <div className="w-full max-w-lg ">
            {questions2.map((faq, index) => (
              <div key={index} className="faq border-b border-shade py-4">
                <div
                  className="faq-question text-lg font-semibold cursor-pointer"
                  onClick={() => toggleQuestion(index)}
                >
                  {faq.question}
                </div>
                <div
                  className={`faq-answer mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
                    selectedQuestion === index
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="py-2">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-primary dark:border-dark_primary" />
      <div className="lg:flex lg:gap-52 md:flex md:gap-44 md:pt-10">
        <div className="lg:p-6">
          <h1 className="text-2xl font-extrabold py-2 lg:text-5xl lg:px-6 md:text-3xl uppercase">
            Fillings
          </h1>
        </div>
        <div className="lg:p-10">
          <h1 className="text-xl font-semibold pb-2 lg:text-3xl md:text-2xl">
            Restore Your Smile with Durable, Aesthetic Fillings at Zen Dental
            Studio
          </h1>
          <p className="pb-2 lg:text-lg md:text-lg">
            Fillings are used to repair tooth decay and restore function and
            aesthetics while preserving your tooth structure. Zen Dental Studio
            offers tooth-colored fillings that provide a durable,
            natural-looking solution to tooth decay. Our skilled dental team at
            Zen Dental Studio combines modern technology and compassionate care
            to provide you with gentle, efficient fillings that enhance your
            smile.
          </p>
          <h1 className="text-xl font-semibold lg:text-3xl md:text-2xl">
            The Process
          </h1>
          <p className="pb-2 lg:text-lg md:text-lg">
            During your visit, our dental professionals will remove the decayed
            portion of the tooth and clean the area thoroughly. Next, we'll
            place the tooth-colored filling material, shape it to match your
            natural tooth, and cure it for a durable, long-lasting restoration.
          </p>
          <hr className="border-primary dark:border-dark_shade" />
          <div className="w-full max-w-lg ">
            {questions3.map((faq, index) => (
              <div key={index} className="faq border-b border-shade py-4">
                <div
                  className="faq-question text-lg font-semibold cursor-pointer"
                  onClick={() => toggleQuestion(index)}
                >
                  {faq.question}
                </div>
                <div
                  className={`faq-answer mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
                    selectedQuestion === index
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="py-2">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-primary dark:border-dark_primary" />
      <div className="lg:flex lg:gap-52 md:flex md:gap-44 md:pt-10">
        <div className="lg:p-6">
          <h1 className="text-2xl font-extrabold py-2 lg:text-5xl lg:px-6 md:text-3xl uppercase">
            Root Canals
          </h1>
        </div>
        <div className="lg:p-10 lg:px-14">
          <h1 className="text-xl font-semibold pb-2 lg:text-3xl md:text-2xl">
            Save and Repair Your Teeth with Root Canal Treatments at Zen Dental
            Studio
          </h1>
          <p className="pb-2 lg:text-lg md:text-lg">
            Root canal treatments are designed to save and repair damaged or
            infected teeth. At Zen Dental Studio, we provide gentle,
            anxiety-free root canal treatments in a comfortable, serene setting.
            ‍
          </p>
          <h1 className="text-xl font-semibold lg:text-3xl md:text-2xl">
            The Process
          </h1>
          <p className="pb-2 lg:text-lg md:text-lg">
            During your visit, our dental professionals will carefully remove
            the infected pulp from the affected tooth, clean and shape the root
            canal, and seal it to prevent future infection. A dental crown may
            be placed to restore the tooth's strength and appearance.
          </p>
          <hr className="border-primary dark:border-dark_shade" />
          <div className="w-full max-w-lg ">
            {questions4.map((faq, index) => (
              <div key={index} className="faq border-b border-shade py-4">
                <div
                  className="faq-question text-lg font-semibold cursor-pointer"
                  onClick={() => toggleQuestion(index)}
                >
                  {faq.question}
                </div>
                <div
                  className={`faq-answer mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
                    selectedQuestion === index
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="py-2">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-primary dark:border-dark_primary" />
      <div className="lg:flex lg:gap-20 md:flex md:gap-24 md:pt-10">
        <div className=" lg:p-6 lg:pr-6">
          <h1 className="text-2xl font-extrabold py-2 lg:text-5xl lg:px-6 md:text-3xl uppercase">
            Teeth Extractions
          </h1>
        </div>
        <div className="lg:p-10">
          <h1 className="text-xl font-semibold pb-2 lg:text-3xl md:text-2xl">
            Experience Safe, Efficient Teeth Extractions at Zen Dental Studio
          </h1>
          <p className="pb-2 lg:text-lg md:text-lg">
            Our skilled dental team at Zen Dental Studio provides safe,
            efficient teeth extractions in a serene, calming environment,
            ensuring your comfort and well-being throughout the process. Our
            experienced dental professionals use advanced technology such as 3D
            imaging to ensure that your teeth extractions are performed with the
            utmost precision and care. ‍ ‍
          </p>
          <h1 className="text-xl font-semibold lg:text-3xl md:text-2xl">
            The Process
          </h1>
          <p className="pb-2 lg:text-lg md:text-lg">
            During your visit, our team will administer local anesthesia to numb
            the area around the tooth. We will then carefully extract the tooth,
            taking care to minimize discomfort and promote a smooth recovery.
            Our team will provide you with detailed post-extraction care
            instructions and support, ensuring a successful healing process.
          </p>
          <hr className="border-primary dark:border-dark_shade" />
          <div className="w-full max-w-lg ">
            {questions5.map((faq, index) => (
              <div key={index} className="faq border-b border-shade py-4">
                <div
                  className="faq-question text-lg font-semibold cursor-pointer"
                  onClick={() => toggleQuestion(index)}
                >
                  {faq.question}
                </div>
                <div
                  className={`faq-answer mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
                    selectedQuestion === index
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="py-2">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralServices;
