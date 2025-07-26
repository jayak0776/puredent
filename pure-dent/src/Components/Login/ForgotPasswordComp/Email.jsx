import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import ResetPassword from "./ResetPassword";

function Email() {
  const navigate = useNavigate();
  const [state, setState] = useState(true);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [savedEmail, setSavedEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple email validation
    if (!email) {
      setError("Email address is required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Clear any previous errors
    setError("");
    const toastId = toast.loading("Sending...");

    axios
      .post(
        "http://localhost:8080/user/forgot-password",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        toast.update(toastId, {
          render: "Password reset code sent to your email!",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
        console.log(response);

        setSavedEmail(email);
        // Clear the email field
        setEmail("");

        // Show the ResetPassword component
        setTimeout(() => setState(false), 2000);
      })
      .catch((error) => {
        if (error.response) {
          const { status } = error.response;
          switch (status) {
            case 406:
              toast.update(toastId, {
                render: "User not found with this email address!",
                type: "error",
                isLoading: false,
                autoClose: 2000,
              });
              break;
            case 500:
              toast.update(toastId, {
                render: "Server not responding! Please try again later.",
                type: "error",
                isLoading: false,
                autoClose: 2000,
              });
              break;
            default:
              toast.update(toastId, {
                render: "Invalid email address!",
                type: "error",
                isLoading: false,
                autoClose: 2000,
              });
              break;
          }
        } else {
          // Handle other errors like network issues
          toast.update(toastId, {
            render: "Server not responding! Please try again later.",
            type: "error",
            isLoading: false,
            autoClose: 2000,
          });
        }
      });
  };

  return (
    <>
      {state ? (
        <div className="text-primary bg-secondary w-[70%] h-[38%] p-5 rounded-sm md:w-[50%] md:h-[25%] lg:w-[30%] lg:h-[38%]">
          <h1 className="text-center text-2xl font-extrabold md:text-4xl">
            Reset Password
          </h1>
          <div className="p-3">
            <form onSubmit={handleSubmit}>
              <label className="text-sm pb-20 md:text-lg md:pb-14">
                Enter Your Email Address*
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="mt-1 bg-primary text-secondary rounded-sm border-none w-full focus:outline-none md:p-1 md:mb-3"
              />
              {error && <p className="text-sm text-primary">{error}</p>}
              <div className="flex justify-center items-center p-7">
                <button
                  type="submit"
                  className="bg-primary text-secondary px-4 py-1 rounded-sm font-medium md:text-lg hover:bg-shade hover:text-primary duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      ) : (
        <ResetPassword email={savedEmail} />
      )}
    </>
  );
}

export default Email;
