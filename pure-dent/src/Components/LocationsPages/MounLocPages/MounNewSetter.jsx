import React, { useState } from "react";
import axios from "axios";

function SanNewSetter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    doctor: "",
    branch: "Mountain View",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const access_token = window.localStorage.getItem("access_token");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // Simulate form submission
    setFormSubmitted(true);
    axios
      .post("http://localhost:8080/user/appointments/message", formData, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    // Simulate form submission
    setFormSubmitted(true);

    // Optionally reset the form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      doctor: "",
      message: "",
      branch: "Mountain View",
    });

    // You can add an API call here to actually submit the form data
  };

  return (
    <div className="bg-primary text-secondary dark:bg-dark_primary dark:text-dark_secondary w-full h-full p-10 md:p-16 lg:p-20">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold py-2 md:text-5xl lg:text-7xl uppercase">
          Setting a new standard in dental care
        </h1>
        <p className="text-xl py-3 md:text-2xl">
          Experience compassionate, mindful dental care with cutting-edge
          technology at our office in Mountain View.
        </p>
        <p className="text-xl py-3 md:text-xl">
          We offer a full range of dental services, from preventive care and
          cleanings to more complex procedures such as root canals and veneers.
          We use the latest technology and equipment to ensure that our patients
          receive the best possible care.
        </p>
        <p className="text-xl py-1 md:text-xl">
          Contact us with any questions using the forms below, and our team will
          respond within 1 - 2 business days.
        </p>
      </div>
      <div className="md:flex md:p-10 md:gap-10 lg:justify-center lg:gap-20">
        <div className="text-center py-6 md:py-0">
          <h1 className="text-2xl font-extrabold lg:text-4xl uppercase">
            Mountain View
          </h1>
          <h3 className="text-lg">hello@zendentalsf.com</h3>
          <h4 className="text-lg">650-582-2848</h4>
          <br />
          <p className="text-lg font-semibold">
            400 San Antonio Rd, Suite A, Mountain View, CA 94040
          </p>
          <br />
          <p className="text-lg font-semibold">Hours</p>
          <p className="text-lg font-semibold">Mon, Tue, Fri: 8am-5pm</p>
          <p className="text-lg font-semibold">Wed, Thu: 9am-6pm</p>
        </div>

        <div className="p-0">
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <h1 className="text-3xl font-extrabold mb-4 md:text-4xl">
                Questions? Get in touch.
              </h1>

              <label htmlFor="name" className="text-lg font-semibold">
                Your Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="rounded-sm text-primary bg-secondary dark:bg-dark_secondary dark:text-dark_primary p-2 focus:outline-none"
              />

              <label htmlFor="email" className="text-lg font-semibold">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="rounded-sm text-primary bg-secondary dark:bg-dark_secondary dark:text-dark_primary p-2 focus:outline-none"
              />

              <label htmlFor="phone" className="text-lg font-semibold">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                required
                onChange={handleChange}
                className="rounded-sm text-primary bg-secondary dark:bg-dark_secondary dark:text-dark_primary p-2 focus:outline-none"
              />

              <label htmlFor="doctors" className="text-lg font-semibold">
                Select Doctor*
              </label>
              <select
                id="doctor"
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
                className="rounded-sm text-primary dark:text-dark_primary bg-secondary dark:bg-dark_secondary p-3 focus:outline-none"
              >
                <option className="p-3">Select</option>
                <option className="p-3">Dr. Susan Matthews</option>
                <option className="p-3">Dr. Michael Thompson</option>
                <option className="p-3">Dr. Emily Watson</option>
                <option className="p-3">Dr. Olivia Green</option>
                <option className="p-3">Dr. Karen Smith</option>
                <option className="p-3">Dr. Rachel Adams</option>
                <option className="p-3">Dr. Laura Bennett</option>
                <option className="p-3">Dr. Anthony Reed</option>
              </select>

              <label htmlFor="message" className="text-lg font-semibold">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="rounded-sm text-primary bg-secondary dark:bg-dark_secondary dark:text-dark_primary p-2 focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="bg-secondary text-primary dark:bg-dark_secondary dark:text-dark_primary p-3 rounded-md font-semibold mt-4 hover:bg-shade hover:text-primary duration-300"
              >
                Submit
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h1 className="text-3xl font-extrabold">Thank you!</h1>
              <p className="text-xl mt-4">
                Your message has been sent successfully.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SanNewSetter;
