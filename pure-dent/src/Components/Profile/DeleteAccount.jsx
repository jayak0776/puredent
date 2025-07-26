import React, { useState } from "react";
import PasswordCheck from "./PasswordCheck";
import axios from "axios";
import { MdDangerous } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../Pages/Auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DeleteAccount() {
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [hashedPassword, setHashedPassword] = useState("");
  const [correct, setCorrect] = useState(true);
  const [send, setSend] = useState("Send OTP");

  const access_token = window.localStorage.getItem("access_token");
  const username = window.localStorage.getItem("username");
  const navigate = useNavigate();

  const handleSendOtp = () => {
    toast.info("Sending OTP...");
    axios
      .post(
        `http://localhost:8080/user/sent-otp`,
        { username: username }, // Include username in the request body
        {
          headers: {
            Authorization: `Bearer ${access_token}`, // Include the access token in headers
          },
        }
      )
      .then((response) => {
        toast.success("OTP sent successfully!");
        console.log("OTP sent successfully:", response.data);
      })
      .catch((error) => {
        toast.error("Error sending OTP. Please try again.");
        console.error("Error sending OTP:", error);
      });
    setSend("Resend");
  };

  const handleTextChange = (text) => {
    if (text === "Password matches!") {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  };

  const handleDeleteAccount = () => {
    toast.warning("Deleting account. Please wait...");
    axios
      .post(
        `http://localhost:8080/user/account-delete`,
        { username: username, otp: otp }, // Include username in the request body
        {
          headers: {
            Authorization: `Bearer ${access_token}`, // Include the access token in headers
          },
        }
      )
      .then((response) => {
        toast.success("Account deleted successfully!");
        console.log("Successfully Account Delete:", response.data);
        logoutUser(navigate);
        navigate("/login");
      })
      .catch((error) => {
        toast.error("Please enter valid OTP!");
        console.error("Error to delete account:", error);
      });
  };

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
        toast.error("Error fetching user details.");
        console.error("Error fetching user data:", error);
      });
  }

  return (
    <div className="w-full h-full bg-primary dark:bg-dark_primary p-4 md:p-14">
      <ToastContainer />
      <div className="p-3 md:p-6 max-w-md mx-auto mb-12 md:mb-0 bg-secondary dark:bg-dark_primary dark:text-dark_secondary text-primary">
        <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4">
          Delete Account
        </h2>
        <p className="text-[#ff5e5e] text-base mb-6 flex">
          <span>
            <MdDangerous className="mt-1 text-lg mx-1" />
          </span>
          Deleting your account will permanently remove all your data, including
          dental appointments and user records. This action cannot be undone.
        </p>

        {/* Password Input */}
        <div className="mb-2">
          <label className="block text-gray-700 font-medium mb-2">
            Password:
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full md:text-lg px-1 py-1 md:px-3 md:py-2 text-secondary dark:bg-secondary dark:text-dark_primary border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <PasswordCheck
            plainTextPassword={password}
            hashedPassword={hashedPassword}
            onTextChange={handleTextChange}
          />
        </div>

        {/* OTP Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">OTP:</label>
          <input
            type="text"
            placeholder="Enter the OTP"
            value={otp}
            required
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-1 py-1 md:px-3 md:py-2 text-secondary dark:bg-secondary dark:text-dark_primary  border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            onClick={handleSendOtp}
            className="mt-2 px-2 py-2 md:px-4 md:py-2 bg-shade text-white rounded-sm dark:text-dark_primary hover:bg-primary hover:text-secondary transition"
          >
            {send}
          </button>
        </div>

        {/* Delete Button */}
        <div className="flex justify-center items-center px-6 lg:px-24 md:px-14">
          <button
            onClick={() => setShowConfirmation(true)}
            className="w-full py-2 bg-[#ff3e0e] text-white rounded-sm dark:text-dark_primary hover:bg-[#ff7c7c] transition"
          >
            Delete My Account
          </button>
        </div>

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed bg-secondary dark:bg-dark_primary inset-0 flex items-center justify-center bg-black/50 z-50 p-1">
            <div className="p-4 md:p-6 bg-white rounded-lg shadow-lg max-w-sm w-full">
              <h3 className="text-xl md:text-2xl font-semibold uppercase text-red-600 mb-4">
                Confirm Deletion
              </h3>
              <p className="text-gray-800 mb-6 text-base">
                Are you sure you want to delete your account? This action cannot
                be undone.
              </p>
              <div className="flex justify-between">
                <button
                  onClick={() => {
                    setShowConfirmation(false);
                    handleDeleteAccount();
                  }}
                  className="px-4 py-2 bg-[#d87f7f] text-white rounded-lg hover:bg-red-700"
                >
                  Yes, Delete My Account
                </button>
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="px-4 py-2 bg-[#638971] text-gray-800 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DeleteAccount;
