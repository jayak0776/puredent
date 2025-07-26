import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { GrFormViewHide } from "react-icons/gr";

function ResetPassword({ email }) {
  console.log(email);
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [message, setMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [reEnterPasswordVisible, setReEnterPasswordVisible] = useState(false);
  const [error, setError] = useState(false);

  const validatePassword = (password) => {
    const minLength = 8;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const capitalLetterRegex = /[A-Z]/;

    if (password.length < minLength) {
      return true;
    }
    if (!capitalLetterRegex.test(password)) {
      return true;
    }
    if (!specialCharRegex.test(password)) {
      return true;
    }
    return false;
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);

    const error = validatePassword(e.target.value);
    setError(error);
  };

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleReEnterPasswordVisibility = () => {
    setReEnterPasswordVisible(!reEnterPasswordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!error && newPassword) {
      if (newPassword !== reEnterPassword) {
        setMessage("Passwords do not match!");
      } else {
        setMessage("");
        const data = { email, newPassword, token };
        console.log(data);

        const toastId = toast.loading("Processing...");

        axios
          .post("http://localhost:8080/user/reset-password", data)
          .then((response) => {
            toast.update(toastId, {
              render: "Password reset successful!",
              type: "success",
              isLoading: false,
              autoClose: 2000,
            });

            // Clear the fields
            setReEnterPassword("");
            setNewPassword("");
            setToken("");

            // Redirect to login page after 1 second
            setTimeout(() => {
              navigate("/login");
            }, 1000);
          })
          .catch((error) => {
            if (error.response) {
              const { status } = error.response;
              switch (status) {
                case 401:
                  toast.update(toastId, {
                    render: "User not found with this email!",
                    type: "error",
                    isLoading: false,
                    autoClose: 2000,
                  });
                  break;
                case 400:
                  toast.update(toastId, {
                    render: "Please enter the correct reset code!",
                    type: "error",
                    isLoading: false,
                    autoClose: 2000,
                  });
                  break;
                case 406:
                  toast.update(toastId, {
                    render: "Old password does not match the new password!",
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
                    render: "An unexpected error occurred.",
                    type: "error",
                    isLoading: false,
                    autoClose: 2000,
                  });
                  break;
              }
            } else {
              toast.update(toastId, {
                render: "Server not responding! Please try again later.",
                type: "error",
                isLoading: false,
                autoClose: 2000,
              });
            }
            console.error("Error during password reset:", error);
          });
      }
    } else {
      toast.warn(
        "Password must be at least 8 characters long, contain at least one uppercase letter, and one special character."
      );
    }
  };

  return (
    <div className="text-primary bg-secondary w-[70%] h-[53%] p-5 rounded-sm md:w-[53%] md:h-[40%] lg:w-[30%] lg:h-[65%] md:p-10">
      <ToastContainer />
      <h1 className="text-center text-2xl font-extrabold md:text-4xl">
        Reset Password
      </h1>
      <div className="p-3">
        <form onSubmit={handleSubmit}>
          <label className="text-sm pb-2 md:text-lg md:pb-4">
            Enter Your Reset Code*
          </label>
          <input
            type="text"
            name="token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="mt-1 bg-primary text-secondary rounded-sm border-none w-full focus:outline-none md:p-1 md:mb-3"
          />

          <label className="text-sm pb-2 md:text-lg md:pb-4">
            Create New Password*
          </label>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              name="newPassword"
              value={newPassword}
              onChange={handlePasswordChange}
              className="mt-1 bg-primary text-secondary rounded-sm border-none w-full focus:outline-none md:p-1 md:mb-3"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-2 md:top-3 text-sm bg-transparent border-none text-shade"
            >
              {passwordVisible ? <FaEye /> : <GrFormViewHide />}
            </button>
          </div>

          <label className="text-sm pb-2 md:text-lg md:pb-4">
            Re-enter Password*
          </label>
          <div className="relative">
            <input
              type={reEnterPasswordVisible ? "text" : "password"}
              name="password"
              value={reEnterPassword}
              onChange={(e) => setReEnterPassword(e.target.value)}
              className="rounded-sm bg-primary text-secondary focus:outline-none w-full md:p-1 md:mb-3"
            />
            <button
              type="button"
              onClick={toggleReEnterPasswordVisibility}
              className="absolute right-2 top-1 md:top-2 text-sm bg-transparent border-none text-shade"
            >
              {reEnterPasswordVisible ? <FaEye /> : <GrFormViewHide />}
            </button>
          </div>

          {message && <p className="text-sm pt-1 text-red-500">{message}</p>}

          <div className="flex justify-center items-center p-7">
            <button
              type="submit"
              className="bg-primary text-secondary hover:bg-shade hover:text-primary px-2 py-1 rounded-sm font-medium"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
