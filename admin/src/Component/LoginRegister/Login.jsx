import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye } from "react-icons/fa";
import { GrFormViewHide } from "react-icons/gr";

function Login() {
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in...");
    try {
      const response = await axios.post(
        "http://localhost:8080/admin/api/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const token = response.data;

      window.sessionStorage.setItem("admin_access_token", token.access_token);
      window.sessionStorage.setItem("admin_refresh_token", token.refresh_token);
      console.log("Response from server:", response.data);

      const access_token = window.sessionStorage.getItem("admin_access_token");
      console.log(access_token);

      try {
        const username_response = await axios.get(
          `http://localhost:8080/user/username/${email}`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );

        console.log(username_response.data);
        window.sessionStorage.setItem("admin_username", username_response.data);
        window.sessionStorage.setItem("admin_login", true);
      } catch (error) {
        console.error(
          "Error fetching username:",
          error.response ? error.response.data : error.message
        );
      }

      toast.update(toastId, {
        render: "Login Successful!",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });

      // Navigate to home page after successful login
      setTimeout(() => {
        navigate("/status");
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Error logging in:", error);
      toast.update(toastId, {
        render: "Error logging in. Please check your credentials.",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="bg-primary text-secondary w-full h-full md:h-[95vh] lg:h-[90vh]">
      <ToastContainer />
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Column */}
        <div className="w-full md:w-[45%] h-[100%] md:h-full bg-primary flex justify-center items-center py-10 md:py-0">
          <div className="w-80 h-[65vh] text-primary bg-secondary p-10 rounded-sm lg:w-[70%] md:w-[85%] md:h-[35%] lg:h-[60%] ">
            <h1 className="text-3xl font-extrabold pb-4 lg:text-4xl md:pb-0 md:text-3xl">
              <span className="underline">Ad</span>min Login
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-sm bg-primary text-secondary p-1 md:p-0 lg:p-1 focus:outline-none w-full"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-sm bg-primary text-secondary p-1 md:p-0 lg:p-1 focus:outline-none w-full"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-2 text-sm bg-transparent border-none text-shade"
                >
                  {passwordVisible ? <FaEye /> : <GrFormViewHide />}
                </button>
              </div>
              <p className="text-sm p-3 cursor-pointer font-medium">
                <span className="hover:text-shade hover:underline duration-300">
                  {/* <NavLink to="/forgot-password">Forgot Password?</NavLink> */}
                  Forgot Password?
                </span>
              </p>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-primary text-secondary text-sm p-2 rounded-full font-semibold mt-3 hover:bg-shade hover:text-primary duration-300 w-[50%] lg:w-[40%] md:w-[60%]"
                >
                  Login Now
                </button>
              </div>
              <p className="py-3 text-center md:p-4 lg:p-3">
                Don't have an account?{" "}
                <span className="cursor-pointer hover:underline font-extrabold">
                  {/* <NavLink to="/sign-up">Register Here</NavLink> */}
                  Register Here
                </span>
              </p>
            </form>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-[57%] h-[70vh] md:h-full text-primary bg-secondary text-center px-10 py-32 md:px-16 md:py-80 lg:p-36">
          <div className="md:flex md:justify-center md:items-center lg:pt-7">
            <div>
              <h1 className="text-4xl font-extrabold py-3 md:text-7xl md:py-8 md:pb-5">
                <span className="underline">Cr</span>eate Account
              </h1>
              <p className="text-xl font-medium md:text-3xl">
                Create account and Beautiful smiles start here
              </p>
              <div className="flex justify-center items-center">
                <button className="px-6 py-2 my-3 bg-primary text-secondary hover:bg-shade hover:text-primary  rounded-sm font-medium md:px-9 md:py-3 lg:px-9 lg:py-2 md:text-2xl md:my-6 duration-300">
                  <NavLink to="/register">Register Now</NavLink>
                  {/* Register Now */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
