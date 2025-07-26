import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { GrFormViewHide } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import PasswordCheck from "./PasswordCheck";
import { useNavigate } from "react-router-dom";

// Part 1: State and visibility management for passwords
function ChangePassword() {
  const [currentPassword, setCurrPass] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [correct, setCorrect] = useState(false);

  // States to manage visibility of password fields
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [conPasswordVisible, setConPasswordVisible] = useState(false);

  // Hashed password fetched from the backend
  const [hashedPassword, setHashedPassword] = useState("");

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

  // Part 2: Toggle visibility of passwords
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };
  const toggleConPasswordVisibility = () => {
    setConPasswordVisible(!conPasswordVisible);
  };

  const handleTextChange = (text) => {
    if (text === "Password matches!") {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  };

  // Part 3: Password validation logic
  // Check if newPassword and confirmPassword match, update error message accordingly
  const validatePasswords = (confirmPasswordValue) => {
    setConPass(confirmPasswordValue);

    // Check if newPassword matches confirmPassword
    if (
      newPassword &&
      confirmPasswordValue &&
      newPassword !== confirmPasswordValue
    ) {
      setErrorMessage("Passwords do not match!");
    } else {
      setErrorMessage("");
    }
  };

  // Part 4: Fetch user details from the backend (only once)
  const access_token = window.localStorage.getItem("access_token");
  const username = window.localStorage.getItem("username");

  if (access_token && username) {
    axios
      .get(`http://localhost:8080/user/user-details/${username}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((response) => {
        setHashedPassword(response.data.password);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        if (error.response && error.response.status === 401) {
          toast.error("Unauthorized! Please log in again.");
        } else {
          toast.error("Failed to fetch user details. Please try again later.");
        }
      });
  } else {
    toast.error("Access token or username is missing. Please log in.");
  }

  // Part 5: Handle password change submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!error && newPassword) {
      // Check if the new password is the same as the current one
      if (correct) {
        if (newPassword === currentPassword) {
          toast.error(
            "New password cannot be the same as the current password!"
          );
          return;
        }
        if (newPassword !== confirmPassword) {
          toast.error("New password and confirm password not match");
          return;
        }
        axios
          .post(
            "http://localhost:8080/user/change-password",
            {
              user: username,
              newPassword: newPassword,
            },
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
              },
            }
          )
          .then((response) => {
            if (response.status === 200) {
              toast.success("Password changed successfully!");
              setCurrPass("");
              setConPass("");
              setNewPassword("");
              setTimeout(() => {
                navigate("/profile-settings");
                window.location.reload();
              }, 1000);
            } else {
              toast.error("Something went wrong! Please try again.");
            }
          })
          .catch((error) => {
            // Check if error has a response
            if (error.response) {
              const { status, data } = error.response;

              // Handle 401 Unauthorized
              if (status === 401) {
                toast.error(
                  data.message || "Unauthorized! Please log in again."
                );
              }
              // Handle 400 Bad Request
              else if (status === 400) {
                toast.error(
                  data.message || "New Password cannot be same as old password!"
                );
              }
              // Handle other errors with response data
              else if (data && data.message) {
                toast.error(data.message || "An error occurred!");
              } else {
                toast.error(
                  "An unexpected error occurred. Please try again later."
                );
              }
            } else {
              // Handle network or other errors without a response
              toast.error(
                "Failed to change password. Please check your network or try again later."
              );
            }
          });
      } else {
        toast.error("Please enter correct password of current password!");
      }
    } else {
      toast.warn(
        "Password must be at least 8 characters long, contain at least one uppercase letter, and one special character."
      );
    }
  };

  // Part 6: Rendering the form
  return (
    <div className="text-secondary bg-primary dark:bg-dark_primary lg:w-full lg:h-full lg:p-20 lg:px-32 md:p-10 rounded-sm md:h-[88vh] md:w-[40vh] w-[30vh] p-4 h-[91vh]">
      <ToastContainer />
      <h1 className="text-center text-lg lg:text-5xl font-extrabold mb-3 md:mb-2  md:text-3xl md:p-5">
        CHANGE PASSWORD
      </h1>
      <div className="lg:px-56 md:px-24">
        <form onSubmit={handleSubmit}>
          <div className="relative py-1 lg:pl-12">
            <label className="block md:text-lg font-bold md:mb-0 mb-0 text-sm">
              Current Password*
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="currentPassword"
              name="currentPassword"
              required
              value={currentPassword}
              onChange={(e) => setCurrPass(e.target.value)}
              className="lg:w-[80%] lg:px-4 rounded-sm bg-secondary text-primary dark:text-dark_primary md:p-1 lg:p-2 focus:outline-none w-full text-sm"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute lg:right-24 md:right-4 md:bottom-4 bottom-2 right-2 text-sm bg-transparent border-none text-shade"
            >
              {passwordVisible ? <FaEye /> : <GrFormViewHide />}
            </button>
          </div>
          <div className="lg:px-14">
            <PasswordCheck
              plainTextPassword={currentPassword}
              hashedPassword={hashedPassword}
              onTextChange={handleTextChange}
            />
          </div>
          {/* {correct ? (
            <p className="text-green-500">Passwords match, proceed!</p>
          ) : (
            <p className="text-red-500">Passwords do not match, try again!</p>
          )} */}

          <div className="relative py-1 lg:pl-12">
            <label className="block md:text-lg font-bold md:mb-0 mb-0 text-sm">
              New Password*
            </label>
            <input
              type={newPasswordVisible ? "text" : "password"}
              id="newPassword"
              name="newPassword"
              required
              value={newPassword}
              onChange={handlePasswordChange}
              className="lg:w-[80%] lg:px-4 rounded-sm bg-secondary text-primary dark:text-dark_primary md:p-1 lg:p-2 focus:outline-none w-full text-sm"
            />
            <button
              type="button"
              onClick={toggleNewPasswordVisibility}
              className="absolute  lg:right-24 md:right-4 md:bottom-4 bottom-2 right-2 text-sm bg-transparent border-none text-shade"
            >
              {newPasswordVisible ? <FaEye /> : <GrFormViewHide />}
            </button>
          </div>

          <div className="relative py-1 lg:pl-12">
            <label className="block md:text-lg font-bold md:mb-0 mb-0 text-sm">
              Confirm Password*
            </label>
            <input
              type={conPasswordVisible ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => validatePasswords(e.target.value)}
              className="lg:w-[80%] lg:text-sm lg:px-4 rounded-sm bg-secondary text-primary dark:text-dark_primary md:p-1 lg:p-2 focus:outline-none w-full text-sm"
            />
            <button
              type="button"
              onClick={toggleConPasswordVisibility}
              className="absolute lg:right-24 md:right-4 md:bottom-4 bottom-2 right-2 text-sm bg-transparent border-none text-shade"
            >
              {conPasswordVisible ? <FaEye /> : <GrFormViewHide />}
            </button>
          </div>

          <div className="lg:px-14">
            {errorMessage && (
              <p className="text-red-500 text-xs font-medium">{errorMessage}</p>
            )}
          </div>

          <div className="flex justify-center items-center py-5">
            <button
              type="submit"
              className="text-xs bg-secondary text-primary dark:text-dark_primary hover:text-primary hover:bg-shade duration-300 px-3 py-1 rounded-sm cursor-pointer font-semibold lg:px-4 lg:py-2 md:text-base md:px-3 md:py-1"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
