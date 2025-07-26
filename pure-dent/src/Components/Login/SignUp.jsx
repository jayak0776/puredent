import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye } from "react-icons/fa";
import { GrFormViewHide } from "react-icons/gr";

function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phonenumber: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validatePassword = (password) => {
    const minLength = 8;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const capitalLetterRegex = /[A-Z]/;

    if (password.length < minLength) {
      return "Password must be at least 8 characters long.";
    }
    if (!capitalLetterRegex.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!specialCharRegex.test(password)) {
      return "Password must contain at least one special character.";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "password") {
      const error = validatePassword(value);
      setErrorMessage(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    if (!errorMessage && formData.password) {
      const sendData = async () => {
        const toastId = toast.loading("Registering...");
        try {
          const response = await axios.post(
            "http://localhost:8080/user/register",
            formData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          toast.update(toastId, {
            render: "Successfully Registered! Please login now.",
            type: "success",
            isLoading: false,
            autoClose: 2000,
          });
          console.log("Response from server:", response.data);
          setTimeout(() => {
            navigate("/sign-in");
          }, 2000);

          setFormSubmitted(true);
        } catch (error) {
          if (error.response) {
            const { status } = error.response;
            switch (status) {
              case 409:
                toast.update(toastId, {
                  render: "User already exists with this email!",
                  type: "error",
                  isLoading: false,
                  autoClose: 2000,
                });
                break;

              case 406:
                toast.update(toastId, {
                  render:
                    "Username already exists! Please choose a different username.",
                  type: "error",
                  isLoading: false,
                  autoClose: 2000,
                });
                break;
              case 400:
                toast.update(toastId, {
                  render: "Phone number already exist!",
                  type: "error",
                  isLoading: false,
                  autoClose: 2000,
                });
                break;
              case 500:
                toast.update(toastId, {
                  render: "Server error! Please try again later.",
                  type: "error",
                  isLoading: false,
                  autoClose: 2000,
                });
                break;
              default:
                toast.update(toastId, {
                  render: "An unexpected error occurred. Please try again.",
                  type: "error",
                  isLoading: false,
                  autoClose: 2000,
                });
                break;
            }
          } else {
            // Handle network or other errors
            toast.update(toastId, {
              render: "Network error! Please check your connection.",
              type: "error",
              isLoading: false,
              autoClose: 2000,
            });
          }
        }
      };

      sendData();
    } else {
      toast.warn(
        "Password must be at least 8 characters long, contain at least one uppercase letter, and one special character."
      );
    }
  };

  return (
    <div className="bg-primary dark:bg-dark_primary text-secondary w-full h-full md:h-[93.3vh] lg:h-[90vh]">
      <ToastContainer />
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Column */}
        <div className="w-full md:w-[57%] lg:w-[68%] h-[70vh] md:h-full text-primary dark:text-dark_primary bg-secondary text-center px-10 py-32 md:px-16 md:py-80 lg:p-36">
          <div className="md:flex md:justify-center md:items-center lg:p-16">
            <div>
              <h1 className="text-4xl font-extrabold py-3 md:text-7xl md:py-8 md:pb-5 uppercase">
                <span className="underline">Lo</span>gin Now
              </h1>
              <p className="text-xl font-medium md:text-xl">
                Login Now and Beautiful smiles start here
              </p>
              <div className="flex justify-center items-center">
                <button className="px-6 py-2 my-3 bg-primary dark:bg-dark_primary text-secondary hover:bg-shade hover:text-primary rounded-sm font-medium md:px-9 md:py-3 lg:px-9 lg:py-2 md:text-2xl md:my-6 duration-300">
                  <NavLink to="/sign-in">Login Now</NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-[45%] h-[100%] md:h-full bg-primary dark:bg-dark_primary flex justify-center items-center py-10 md:py-0">
          <div className="w-80 h-[85vh] text-primary dark:text-dark_primary bg-secondary p-10 rounded-sm lg:w-[70%] md:w-[90%] md:h-[45%] lg:h-[80%]">
            <h1 className="text-3xl font-extrabold pb-4 lg:text-4xl md:pb-0 md:text-3xl uppercase">
              <span className="underline">Re</span>gistration
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label
                htmlFor="username"
                className="text-base font-semibold pt-5"
              >
                Username*
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                value={formData.username}
                onChange={handleChange}
                className="rounded-sm bg-primary dark:bg-dark_primary text-secondary p-1 md:p-0 lg:p-1 focus:outline-none w-full "
              />

              <label
                htmlFor="email"
                className="text-base font-semibold pt-5 md:pt-3 lg:pt-5"
              >
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="rounded-sm bg-primary dark:bg-dark_primary text-secondary p-1 md:p-0 lg:p-1  focus:outline-none w-full "
              />

              <label
                htmlFor="phonenumber"
                className="text-base font-semibold pt-5 md:pt-3 lg:pt-5"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phonenumber"
                name="phonenumber"
                pattern="[0-9]{10}" // Only allow 10 digits
                title="Please enter a valid 10-digit phone number"
                value={formData.phonenumber}
                onChange={handleChange}
                className="rounded-sm bg-primary dark:bg-dark_primary text-secondary p-1 md:p-0 lg:p-1 focus:outline-none w-full "
              />

              <label
                htmlFor="password"
                className="text-base font-semibold pt-5 md:pt-3 lg:pt-5"
              >
                Password*
              </label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="rounded-sm bg-primary dark:bg-dark_primary text-secondary p-1 md:p-0 lg:p-1 focus:outline-none w-full "
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-2 text-sm bg-transparent border-none text-shade"
                >
                  {passwordVisible ? <FaEye /> : <GrFormViewHide />}
                </button>
              </div>

              <div className="flex lg:px-2 md:px-1">
                <input type="checkbox" required />
                <p className="text-sm p-3 font-medium">
                  <span>
                    I agree{" "}
                    <button className="hover:text-shade hover:underline duration-300">
                      <NavLink to={"/terms-conditions"}>
                        terms & conditions
                      </NavLink>
                    </button>
                  </span>
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-primary dark:bg-dark_primary text-secondary text-sm p-2 rounded-sm font-semibold mt-3 hover:bg-shade hover:text-primary duration-300 w-[50%] lg:w-[50%] md:w-[70%]"
                >
                  Register Now
                </button>
              </div>
              <p className="py-3 text-center md:p-4 lg:p-2 lg:py-4">
                Already have an account?{" "}
                <span className="cursor-pointer hover:underline font-extrabold">
                  <NavLink to="/sign-in">Login Now</NavLink>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
