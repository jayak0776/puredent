import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { IoBookmarkSharp } from "react-icons/io5";
import { BiSolidDetail } from "react-icons/bi";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

function AppointmentDetails() {
  const [date, setDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const today = new Date();
  const tenDaysLater = new Date();
  tenDaysLater.setDate(today.getDate() + 30);

  const username = window.localStorage.getItem("username");

  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "7:00 PM",
    "8:00 PM",
  ];

  // Function to filter past time slots if the current date is selected
  const getAvailableTimeSlots = () => {
    if (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    ) {
      const currentHour = today.getHours();
      const currentMinute = today.getMinutes();

      return timeSlots.filter((slot) => {
        const [time, modifier] = slot.split(" ");
        let [hours, minutes] = time.split(":").map(Number);

        // Convert to 24-hour format
        if (modifier === "PM" && hours < 12) hours += 12;

        return (
          hours > currentHour ||
          (hours === currentHour && minutes > currentMinute)
        );
      });
    }
    return timeSlots;
  };

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    setSelectedTimeSlot(""); // Reset time slot when date changes
  };

  const handleTimeSlotChange = (slot) => {
    setSelectedTimeSlot(slot);
    const formattedDateTime = formatDateTime(date, slot);
    setDetails((prevData) => ({
      ...prevData,
      appointmentDateTime: formattedDateTime,
    }));
    console.log("Selected DateTime:", formattedDateTime);
  };

  // Helper function to format date and time as 'yyyy-MM-dd HH:mm'
  const formatDateTime = (selectedDate, timeSlot) => {
    const [time, modifier] = timeSlot.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    // Convert to 24-hour format
    if (modifier === "PM" && hours < 12) hours += 12;

    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const day = String(selectedDate.getDate()).padStart(2, "0");
    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}`;

    return `${year}-${month}-${day} ${formattedTime}`;
  };

  const [details, setDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    patient: "",
    problem: "",
    otherProblem: "",
    gender: "",
    appointmentDateTime: "",
    street: "",
    city: "",
    pincode: "",
    state: "",
    describe: "",
    branch: "",
    insurance: "",
    totalFees: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const access_token = window.localStorage.getItem("access_token");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Destructure the details object for easier validation
    const {
      fullName,
      email,
      phoneNumber,
      patient,
      problem,
      gender,
      appointmentDateTime,
      street,
      city,
      pincode,
      state,
      branch,
      insurance,
    } = details;

    // Validate that all required fields are filled
    if (
      !fullName ||
      !email ||
      !phoneNumber ||
      !patient ||
      !problem ||
      !appointmentDateTime ||
      !gender ||
      !street ||
      !city ||
      !pincode ||
      !state ||
      !branch ||
      !insurance
    ) {
      toast.warn("Fill all required fields!");
      return;
    }

    const payload = {
      ...details,
      username: username, // Ensure the username is correctly passed
    };

    // Show loading toast before making the request
    const loadingToastId = toast.loading("Booking appointment...");

    // Make the API request to book the appointment
    axios
      .post("http://localhost:8080/user/appointments/book", payload, {
        headers: {
          Authorization: `Bearer ${access_token}`, // Include the token in the header
        },
      })
      .then((response) => {
        if (response.status === 200) {
          toast.update(loadingToastId, {
            render: "Appointment Booked Successfully!",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });

          // Reset the form fields after successful booking
          setDetails({
            fullName: "",
            email: "",
            phoneNumber: "",
            patient: "",
            problem: "",
            otherProblem: "",
            doctor: "",
            gender: "",
            appointmentDateTime: "",
            street: "",
            city: "",
            pincode: "",
            state: "",
            describe: "",
            branch: "",
            insurance: "",
            totalFees: "",
          });

          // Redirect after a short delay
          setTimeout(() => {
            window.location.href = "/appointment-status";
          }, 2000);
        }
      })
      .catch((error) => {
        toast.update(loadingToastId, {
          render: "Something went wrong!",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });

        console.error(error);
      });
  };

  let insuranceFee = "0.00";
  if (details.insurance !== "No" && details.insurance !== "Nothing") {
    insuranceFee = details.insurance;
  }

  let totalFee = 5.0;
  if (details.insurance) {
    totalFee += 3.0 + 2.0 + parseFloat(insuranceFee);
    details.totalFees = totalFee;
  }

  return (
    <div className="lg:w-full md:w-dull  md:h-full lg:h-[70%] w-full h-full p-10 md:p-16 md:py-7 bg-secondary text-primary dark:text-dark_primary lg:p-32 rounded-md lg:py-14 shadow-shade shadow-2xl">
      <div className="flex justify-center">
        <ToastContainer />
        <h1 className="text-center text-xl lg:text-5xl md:text-3xl font-extrabold md:mb-4  lg:mb-8">
          APPOINTMENT
        </h1>
        <span>
          <IoBookmarkSharp className=" text-xl mt-1 md:mt-0 lg:text-6xl md:text-4xl" />
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <hr className="border-2 border-shade lg:my-5 md:my-3 my-2" />
        <div className="flex">
          <BiSolidDetail className="text-xl mt-3 lg:text-5xl md:text-3xl font-extrabold lg:mt-10 md:mt-2" />
          <h1 className="text-xl mt-2 px-2 lg:text-5xl md:text-3xl md:px-2 lg:pb-1 md:pb-0 font-extrabold lg:mt-10 md:mt-2">
            DETAILS*
          </h1>
        </div>
        <p className="lg:py-2 md:py-2  p-1 font-bold ">
          NOTE : '*' Mention fields are requried fields.
        </p>
        <div className="md:grid md:grid-cols-3 md:gap-x-10 lg:gap-x-0 md:mb-10">
          <div className="lg:flex lg:flex-col lg:px-8 lg:text-base lg:pb-4">
            <label>
              <span className="text-red-600">*</span>Full Name:
            </label>
            <input
              type="text"
              id="fullname"
              name="fullName"
              value={details.fullName}
              autoFocus
              // required
              className="text-secondary bg-primary dark:bg-dark_primary lg:p-1 rounded-sm focus:outline-none w-full"
              onChange={handleChange}
            />
          </div>
          <div className="lg:flex lg:flex-col lg:px-8 lg:text-base lg:pb-4">
            <label>
              <span className="text-red-600">*</span>Email Address: (Mention
              register email id!)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={details.email}
              // required
              autoFocus
              className="text-secondary bg-primary dark:bg-dark_primary lg:p-1 rounded-sm focus:outline-none w-full"
              onChange={handleChange}
            />
          </div>
          <div className="lg:flex lg:flex-col lg:px-8 lg:text-base lg:pb-4">
            <label>
              <span className="text-red-600">*</span>Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={details.phoneNumber}
              autoFocus
              // required
              className="text-secondary bg-primary dark:bg-dark_primary lg:p-1 rounded-sm focus:outline-none w-full"
              onChange={handleChange}
            />
          </div>
          <div className="lg:flex lg:flex-col lg:px-8 lg:text-base lg:pb-4">
            <label>
              <span className="text-red-600">*</span>Gender :
            </label>
            <select
              name="gender"
              value={details.gender}
              autoFocus
              // required
              className="text-secondary bg-primary dark:bg-dark_primary lg:p-2 rounded-sm focus:outline-none w-full font-semibold duration-200 "
              onChange={handleChange}
            >
              <option value="" className="font-semibold ">
                Select
              </option>
              <option value="Male" className="font-semibold ">
                Male
              </option>
              <option value="Female" className="font-semibold ">
                Female
              </option>
              <option value="Others" className="font-semibold ">
                Others
              </option>
            </select>
          </div>
          <div className="lg:flex lg:flex-col lg:px-8 lg:text-base lg:pb-4">
            <label>
              <span className="text-red-600">*</span>Nearest Branch :
            </label>
            <select
              name="branch"
              value={details.branch}
              autoFocus
              // required
              className="text-secondary bg-primary dark:bg-dark_primary p-1 lg:p-2 rounded-sm focus:outline-none w-full font-semibold duration-200 "
              onChange={handleChange}
            >
              <option value="" className="font-semibold text-base">
                Select
              </option>
              <option value="San Francisco" className="font-semibold text-base">
                San Francisco
              </option>
              <option value="Mountain View" className="font-semibold text-base">
                Mountain View
              </option>
            </select>
          </div>
          {details.branch === "San Francisco" && (
            <div className="lg:flex lg:flex-col lg:px-8 lg:text-base lg:pb-4">
              <label>
                <span className="text-red-600">*</span>Select Doctor :
              </label>
              <select
                name="doctor"
                value={details.doctor}
                required
                className="text-secondary bg-primary dark:bg-dark_primary p-1 lg:p-2 rounded-sm focus:outline-none w-full font-semibold duration-200"
                onChange={handleChange}
              >
                <option value="" className="font-semibold text-base">
                  Select a Doctor
                </option>
                <option
                  value="Dr. Susan Matthews"
                  className="font-semibold text-base"
                >
                  Dr. Susan Matthews
                </option>
                <option
                  value="Dr. Emily Watson"
                  className="font-semibold text-base"
                >
                  Dr. Emily Watson
                </option>
                <option
                  value="Dr. Laura Bennett"
                  className="font-semibold text-base"
                >
                  Dr. Laura Bennett
                </option>
                <option
                  value="Dr. Michael Thompson"
                  className="font-semibold text-base"
                >
                  Dr. Michael Thompson
                </option>
                <option
                  value="Dr. Olivia Green"
                  className="font-semibold text-base"
                >
                  Dr. Olivia Green
                </option>
                <option
                  value="Dr. Karen Smith"
                  className="font-semibold text-base"
                >
                  Dr. Karen Smith
                </option>
                <option
                  value="Dr. Rachel Adams"
                  className="font-semibold text-base"
                >
                  Dr. Rachel Adams
                </option>
                <option
                  value="Dr. Anthony Reed"
                  className="font-semibold text-base"
                >
                  Dr. Anthony Reed
                </option>
              </select>
            </div>
          )}
          {details.branch === "Mountain View" && (
            <div className="lg:flex lg:flex-col lg:px-8 lg:text-base lg:pb-4 ">
              <label>
                <span className="text-red-600">*</span>Select Doctor :
              </label>
              <select
                name="doctor"
                value={details.doctor}
                required
                className="text-secondary bg-primary dark:bg-dark_primary p-1 lg:p-2 rounded-sm focus:outline-none w-full font-semibold duration-200"
                onChange={handleChange}
              >
                <option value="" className="font-semibold text-base">
                  Select a Doctor
                </option>
                <option
                  value="Dr. Hannah Foster"
                  className="font-semibold text-base"
                >
                  Dr. Hannah Foster
                </option>
                <option
                  value="Dr. Isabella Turner"
                  className="font-semibold text-base"
                >
                  Dr. Isabella Turner
                </option>
                <option
                  value="Dr. Sophia Brooks"
                  className="font-semibold text-base"
                >
                  Dr. Sophia Brooks
                </option>
                <option
                  value="Dr. Matthew Phillips"
                  className="font-semibold text-base"
                >
                  Dr. Matthew Phillips
                </option>
                <option
                  value="Dr. Daniel Evans"
                  className="font-semibold text-base"
                >
                  Dr. Daniel Evans
                </option>
                <option
                  value="Dr. Andrew Baker"
                  className="font-semibold text-base"
                >
                  Dr. Andrew Baker
                </option>
                <option
                  value="Dr. Benjamin Carter"
                  className="font-semibold text-base"
                >
                  Dr. Benjamin Carter
                </option>
                <option
                  value="Dr. James Cooper"
                  className="font-semibold text-base"
                >
                  Dr. James Cooper
                </option>
              </select>
            </div>
          )}
          <div className="lg:flex lg:flex-col lg:px-8 lg:text-base lg:pb-4">
            <label>
              <span className="text-red-600">*</span>Patient :
            </label>
            <select
              name="patient"
              value={details.patient}
              autoFocus
              // required
              className="text-secondary bg-primary dark:bg-dark_primary p-1 lg:p-2 rounded-sm focus:outline-none w-full font-semibold duration-200 "
              onChange={handleChange}
            >
              <option value="" className="font-semibold text-base">
                Select
              </option>
              <option value="New" className="font-semibold text-base">
                New Patient
              </option>
              <option value="Existing" className="font-semibold text-base">
                Existing Patient
              </option>
            </select>
          </div>
          <div className="lg:flex lg:flex-col lg:px-8 lg:text-base lg:pb-4">
            <label>
              <span className="text-red-600">*</span>Insurance :
            </label>
            <select
              name="insurance"
              value={details.insurance}
              autoFocus
              // required
              className="text-secondary bg-primary dark:bg-dark_primary p-1 lg:p-2 rounded-sm focus:outline-none w-full font-semibold duration-200 "
              onChange={handleChange}
            >
              <option value="Nothing" className="font-semibold text-base">
                Select
              </option>
              <option value="50.00" className="font-semibold text-base">
                Standard $50.00/mon
              </option>
              <option value="70.00" className="font-semibold text-base">
                Ultimate $70.00/mon
              </option>
              <option value="No" className="font-semibold text-base">
                I have already.
              </option>
              <option value="No" className="font-semibold text-base">
                I don't want any insurance.
              </option>
            </select>
          </div>
          <div className="lg:flex lg:flex-col lg:px-8 lg:text-base lg:pb-4">
            <label>
              <span className="text-red-600">*</span>Treatment Services :
            </label>
            <select
              name="problem"
              value={details.problem}
              autoFocus
              // required
              className="text-secondary bg-primary dark:bg-dark_primary p-1 lg:p-2 rounded-sm focus:outline-none w-full font-semibold duration-200"
              onChange={handleChange}
            >
              <option value="" className="font-semibold">
                Select
              </option>
              <option
                value="Comprehensive Exam and Cleaning"
                className="font-semibold"
              >
                Comprehensive Exam and Cleaning
              </option>
              <option value="Teeth Whitening" className="font-semibold">
                Teeth Whitening
              </option>
              <option value="Dental Implants" className="font-semibold">
                Dental Implants
              </option>
              <option value="Orthodontics" className="font-semibold">
                Orthodontics
              </option>
              <option value="Dental Crowns" className="font-semibold">
                Dental Crowns
              </option>
              <option value="Fillings" className="font-semibold">
                Fillings
              </option>
              <option value="Teeth Extractions" className="font-semibold">
                Teeth Extractions
              </option>
              <option value="Root Canals" className="font-semibold">
                Root Canals
              </option>
              <option value="Others" className="font-semibold">
                Others
              </option>
            </select>
          </div>

          {details.problem === "Others" && (
            <div className="lg:flex lg:flex-col lg:px-8 lg:text-base lg:pb-4">
              <label>
                <span className="text-red-600">*</span>Others:
              </label>
              <input
                type="text"
                id="otherProblem"
                name="otherProblem"
                value={details.otherProblem}
                autoFocus
                // required
                className="text-secondary bg-primary dark:bg-dark_primary lg:p-1 rounded-sm focus:outline-none w-full"
                onChange={handleChange}
              />
            </div>
          )}

          <div className="lg:flex lg:flex-col lg:px-8 lg:text-base lg:pb-4">
            <label>
              <span className="text-red-600">*</span>Street:
            </label>
            <input
              type="text"
              id="street"
              name="street"
              value={details.street}
              autoFocus
              // required
              className="text-secondary bg-primary dark:bg-dark_primary lg:p-1 rounded-sm focus:outline-none w-full"
              onChange={handleChange}
            />
          </div>
          <div className="lg:flex lg:flex-col lg:px-8 lg:text-base lg:pb-4">
            <label>
              <span className="text-red-600">*</span>City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={details.city}
              autoFocus
              // required
              className="text-secondary bg-primary dark:bg-dark_primary lg:p-1 rounded-sm focus:outline-none w-full"
              onChange={handleChange}
            />
          </div>
          <div className="lg:flex lg:flex-col lg:px-8 lg:text-base lg:pb-4">
            <label>
              <span className="text-red-600">*</span>Pincode:
            </label>
            <input
              type="tel"
              id="pincode"
              name="pincode"
              value={details.pincode}
              autoFocus
              // required
              className="text-secondary bg-primary dark:bg-dark_primary lg:p-1 rounded-sm focus:outline-none w-full"
              onChange={handleChange}
            />
          </div>
          <div className="lg:flex lg:flex-col lg:px-8 lg:text-base lg:pb-4">
            <label>
              <span className="text-red-600">*</span>State:
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={details.state}
              autoFocus
              // required
              className="text-secondary bg-primary dark:bg-dark_primary lg:p-1 rounded-sm focus:outline-none w-full"
              onChange={handleChange}
            />
          </div>
          <div className="lg:flex lg:flex-col lg:px-8 lg:text-base lg:pb-4">
            <label>Problem:</label>
            <textarea
              className="w-full lg:h-24 rounded-sm bg-primary dark:bg-dark_primary text-secondary focus:outline-none"
              name="describe"
              value={details.describe}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <hr className="border-2 border-shade lg:my-5  md:my-3  my-2" />
        <div className="flex">
          <RiCalendarScheduleFill className="text-xl mt-3 lg:text-5xl md:text-3xl font-extrabold lg:mt-10 md:mt-2" />
          <h1 className="text-xl mt-2 px-2 lg:text-5xl md:text-3xl md:px-2 lg:pb-4 md:pb-3 font-extrabold lg:mt-10 md:mt-2">
            SCHEDULE*
          </h1>
        </div>
        <div className="lg:my-5 my-2 md:my-3 md:mb-12 lg:mb-20 mb-10">
          <div className="md:flex md:justify-center md:gap-16 lg:gap-32 md:p-0 ">
            <div>
              <h2 className="lg:text-3xl md:text-2xl font-semibold text-center mb-4 text-primary dark:text-dark_primary">
                SELECT DATE
              </h2>
              <Calendar
                onChange={handleDateChange}
                value={date}
                minDate={today}
                maxDate={tenDaysLater}
                className=" border border-gray-800 rounded-md text-secondary  "
              />
            </div>
            <div>
              {/* Time Slots in a select dropdown */}
              <div className=" md:mt-0 mt-2">
                <h4 className="lg:text-3xl md:text-2xl md:pb-3 pb-3 font-medium text-center text-primary dark:text-dark_primary lg:pb-4">
                  TIME SLOTS
                </h4>
                <div className=" gap-8 grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2">
                  {getAvailableTimeSlots().map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => handleTimeSlotChange(slot)}
                      className={`py-1 px-4 border rounded-sm ${
                        selectedTimeSlot === slot
                          ? "bg-shade text-primary dark:text-dark_primary"
                          : "bg-primary dark:bg-dark_primary text-secondary"
                      } focus:outline-none`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                <h3 className="lg:text-xl  lg:mt-10 mt-10 lg:p-1 rounded-sm bg-primary dark:bg-dark_primary text-secondary  text-center md:mt-4 md:text-base font-bold">
                  Date : <span className=" text-lg">{date.toDateString()}</span>
                </h3>
                {selectedTimeSlot && (
                  <h3 className="lg:text-xl lg:mt-10  lg:p-1 rounded-sm bg-primary dark:bg-dark_primary text-secondary  text-center mt-4 md:text-base font-bold">
                    Time Slot :{" "}
                    <span className=" text-lg">{selectedTimeSlot}</span>
                  </h3>
                )}
              </div>
            </div>
          </div>
        </div>
        <hr className="border-2 border-shade lg:my-5 md:my-3" />
        <div className="flex">
          <MdPayment className="text-xl mt-3 lg:text-5xl md:text-3xl font-extrabold lg:mt-10 md:mt-2" />
          <h1 className="text-xl mt-2 px-2 pb-3 lg:text-5xl md:text-3xl md:px-2 lg:pb-4 md:pb-3 font-extrabold lg:mt-10 md:mt-2">
            CONSULTANCY FEE*
          </h1>
        </div>
        <div className="flex flex-col px-2 mb-4 md:px-4 md:pb-2 md:mb-7 lg:px-8 lg:pb-4 lg:mb-14">
          <div className="flex justify-between md:py-1">
            <p className="text-base lg:text-2xl md:text-lg font-medium">
              Consultant Fee :
            </p>
            <span className=" lg:text-xl md:text-base md:pl-8 lg:pl-16">
              {" "}
              $ 3.00/-
            </span>
          </div>
          <div className="flex justify-between md:py-1">
            <p className="text-base lg:text-2xl md:text-lg font-medium">
              Insurance :{" "}
            </p>
            <span className="lg:text-xl md:text-base md:ml-16 lg:ml-32">
              {details.insurance ? `$ ${insuranceFee}/-` : "$ 0.00/-"}
            </span>
          </div>
          <div className="flex justify-between md:py-1">
            <p className="text-base lg:text-2xl md:text-lg font-medium">
              Tax :{" "}
            </p>
            <span className="lg:text-xl md:text-base md:ml-16 lg:ml-32">
              $ 2.00/-
            </span>
          </div>
          <hr className="border-1 border-shade lg:my-3 md:my-2 my-2" />
          <div className="flex justify-between md:py-1">
            <p className="lg:text-2xl md:text-lg font-medium">Total Fee : </p>
            <span className="text-base lg:text-2xl md:text-lg font-medium">
              $ {totalFee}.00/-
            </span>
          </div>
        </div>
        <div className="flex justify-end lg:px-5 lg:mt-6 md:px-0 md:mt-4 mt-6">
          <button
            type="submit"
            className="lg:px-6 lg:py-2 md:px-4 md:py-1 px-3 py-1 text-secondary bg-primary dark:bg-dark_primary dark:hover:text-dark_primary dark:hover:bg-dark_shade dark:hover:duration-500 hover:text-primary hover:bg-shade duration-300 lg:text-lg rounded-sm font-medium"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
}

export default AppointmentDetails;
