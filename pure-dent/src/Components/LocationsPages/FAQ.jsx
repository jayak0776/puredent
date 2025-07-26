import React, { useState } from "react";
const questions = [
  {
    question: "Which insurances do you accept?",
    answer:
      "We accept all major dental PPO plans and are in-network with most dental insurance providers. We'd be happy to verify your insurance and let you know the cost of your treatment ahead of your appointment so you have complete information. For context, more than 90% of our patients with a PPO plan are fully covered for their regular cleaning/check-up appointments.",
  },
  {
    question: "Are you accepting new Delta Dental patients?",
    answer:
      "Indeed, we are accepting new Delta Dental patients at both of our locations. Please note that while we are an in-network provider for Delta Dental at our Mountain View location, our San Francisco office is out-of-network. However, many Delta Dental patients at our San Francisco location still receive full coverage for their routine cleanings and exams. We encourage you to contact us if you would like more information or assistance. We're here to help!",
  },
  {
    question: "What if I don't have insurance?",
    answer:
      "Your smile deserves exceptional care—with or without insurance. For those without insurance, we offer a number of dental plans to choose from. Please let us know if you're interested in joining a plan at the time of booking your appointment, and we'll make sure to let you know your options.",
  },
  {
    question: "How much will my treatment cost?",
    answer:
      "We value your trust and respect your right to know what you're paying for, so we keep our pricing transparent. That way, you can make an informed decision about whether or not a treatment is right for you. We'll let you know the total cost of any procedure before your appointment so there are no surprises—and if you have any questions or concerns, we'd be happy to answer them.",
  },
  {
    question: "Which services do you perform at your offices?",
    answer:
      "Zen Dental Studio is the one-stop shop for your dental needs. From restorative treatments to preventative care to cosmetic procedures such as Invisalign and Veneers, we have everything you need to bring out your best smile. For more complex treatments, we have a pool of highly-rated specialists that we will be happy to refer you to.",
  },
];
function FAQ() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <div className="text-primary dark:text-dark_primary bg-secondary p-6 px-10 md:p-10 md:px-16 lg:p-10 lg:px-20">
      <h1 className="text-4xl text-center font-extrabold py-2 md:text-5xl md:py-6 lg:text-7xl lg:py-8 uppercase">
        Pricing FAQs ?
      </h1>
      <div className="md:flex md:justify-center">
        <div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl">
          {questions.map((faq, index) => (
            <div key={index} className="faq border-b border-shade py-4">
              <div
                className="faq-question text-lg font-semibold cursor-pointer md:text-2xl lg:text-2xl"
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
                <p className="py-2 md:text-lg lg:text-lg">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
