import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { logoutUser } from "../Pages/Auth";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState("LOGIN");
  const navigate = useNavigate();

  const dark = window.localStorage.getItem("dark");

  useEffect(() => {
    const storedUsername = window.localStorage.getItem("username");
    const loggedIn = window.localStorage.getItem("login");
    // Update only if the user is logged in
    if (loggedIn && storedUsername) {
      setUserName(storedUsername);
    } else {
      setUserName("LOGIN");
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logoutUser(navigate);

    // const access_token = window.localStorage.getItem("access_token");
    // console.log(access_token);
    // setUserName("Login");
    // window.localStorage.removeItem("login");
    // window.localStorage.removeItem("username");
    // window.localStorage.removeItem("access_token");
    // window.localStorage.removeItem("refresh_token");
    // window.localStorage.removeItem("dark");

    // try {
    //   const response = await axios.get(`http://localhost:8080/user/logout`, {
    //     headers: {
    //       Authorization: `Bearer ${access_token}`,
    //     },
    //   });

    //   console.log(response.data);
    // } catch (error) {
    //   console.error("Error during logout:");
    // }

    // navigate("/login");
  };

  return (
    <div
      className={`  w-full h-16 flex flex-col md:h-20 lg:flex-row lg:justify-between items-center lg:items-start z-50 p-3 md:p-7 lg:p-6 md:px-10 lg:px-28 shadow-2xl bg-primary dark:bg-dark_primary`}
    >
      <div className="flex w-full lg:w-auto items-center justify-between ">
        {/* Logo */}
        <div className="text-3xl text-secondary dark:text-dark_secondary font-extrabold cursor-pointer">
          <NavLink to="/">PURE DENT</NavLink>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-secondary dark:text-dark_secondary text-3xl focus:outline-none"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {!isOpen ? <IoMdMenu /> : <RxCross2 />}
        </button>
      </div>
      {/* Menu Items */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex lg:flex-row lg:space-x-12 w-full lg:w-auto dark:bg-dark_primary bg-primary lg:bg-transparent absolute lg:static top-16 left-0 lg:left-auto lg:top-auto transform lg:transform-none z-40`}
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-14 lg:text-xl lg:font-semibold lg:pt-2 space-y-4 lg:space-y-0 text-center lg:text-left text-secondary dark:text-dark_secondary w-full lg:w-auto shadow-custom-lg font-semibold md:shadow-none">
          <li className="relative group pt-4 lg:pt-0 pb-2 hover:text-[#a99ce8] dark:hover:text-dark_shade">
            <NavLink to="/about">ABOUT US</NavLink>
            {/* Dropdown menu appears only on large screens */}
            <div className="absolute lg:top-full lg:-left-6 lg:w-44 lg:bg-primary lg:dark:bg-dark_primary lg:text-secondary dark:text-dark_secondary lg:p-3 lg:rounded-sm lg:opacity-0 invisible lg:group-hover:opacity-100 lg:group-hover:visible lg:transition-opacity lg:duration-300 shadow-custom-lg">
              <p className="p-1 text-base cursor-pointer hover:bg-[#a99ce8] dark:hover:bg-dark_shade hover:dark:text-dark_secondary hover:text-primary transform hover:scale-110 transition-transform duration-300">
                <NavLink to="/about#providers">Providers</NavLink>
              </p>
              <p className="p-1 text-base cursor-pointer hover:bg-[#a99ce8] dark:hover:bg-dark_shade hover:dark:text-dark_secondary hover:text-primary transform hover:scale-110 transition-transform duration-300">
                <NavLink to="/about#our-values">Our Values</NavLink>
              </p>
              <p className="p-1 text-base cursor-pointer hover:bg-[#a99ce8] dark:hover:bg-dark_shade hover:dark:text-dark_secondary hover:text-primary transform hover:scale-110 transition-transform duration-300">
                <NavLink to="/about#our-offices">Our Offices</NavLink>
              </p>
            </div>
          </li>
          <li className="hover:text-[#a99ce8] dark:hover:text-dark_shade duration-300 pb-2 relative group">
            <NavLink to="/service">SERVICES</NavLink>
            <div className="absolute lg:top-full lg:-left-6 lg:w-60 lg:bg-primary lg:dark:bg-dark_primary dark:text-dark_secondary lg:text-secondary lg:p-3 lg:rounded-sm lg:opacity-0 invisible lg:group-hover:opacity-100 lg:group-hover:visible lg:transition-opacity lg:duration-300 shadow-custom-lg">
              <p className="p-1 text-base cursor-pointer hover:bg-[#a99ce8] dark:hover:bg-dark_shade hover:dark:text-dark_secondary hover:text-primary transform hover:scale-110 transition-transform duration-300">
                <NavLink to="/service#general-dentistry-service">
                  General Dentistry Services
                </NavLink>
              </p>
              <p className="p-1 text-base cursor-pointer hover:bg-[#a99ce8] dark:hover:bg-dark_shade hover:dark:text-dark_secondary hover:text-primary transform hover:scale-110 transition-transform duration-300">
                <NavLink to="/service#destination">Destination</NavLink>
              </p>
              <p className="p-1 text-base cursor-pointer hover:bg-[#a99ce8] dark:hover:bg-dark_shade hover:dark:text-dark_secondary hover:text-primary transform hover:scale-110 transition-transform duration-300">
                <NavLink to="/service#technologies">Technologies</NavLink>
              </p>
              <p className="p-1 text-base cursor-pointer hover:bg-[#a99ce8] dark:hover:bg-dark_shade hover:dark:text-dark_secondary hover:text-primary transform hover:scale-110 transition-transform duration-300">
                <NavLink to="/service#more">And More</NavLink>
              </p>
            </div>
          </li>
          <li className="hover:text-[#a99ce8] dark:hover:text-dark_shade duration-300 pb-2 relative group cursor-pointer">
            DOCTORS
            <div className="z-50  absolute w-34 left-[58%] md:left-[55%] lg:top-full lg:-left-6  md:w-40 text-secondary bg-primary dark:bg-dark_primary dark:text-dark_secondary  p-3  rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 shadow-custom-lg">
              <p className="p-1 text-base cursor-pointer hover:bg-[#a99ce8] dark:hover:bg-dark_shade hover:dark:text-dark_secondary hover:text-primary transform hover:scale-110 transition-transform duration-300">
                <NavLink to="/sanfranscisco/doctors">San Francisco</NavLink>
              </p>
              <p className="p-1 text-base cursor-pointer hover:bg-[#a99ce8] dark:hover:bg-dark_shade hover:dark:text-dark_secondary hover:text-primary transform hover:scale-110 transition-transform duration-300">
                <NavLink to="/mountainview/doctors">Mountain View</NavLink>
              </p>
            </div>
          </li>
          <li className="hover:text-[#a99ce8] dark:hover:text-dark_shade duration-300 pb-2 relative group">
            <NavLink to="/patients">PATIENT</NavLink>
            <div className="absolute lg:top-full lg:-left-6 lg:w-60 bg-primary text-secondary dark:bg-dark_primary dark:text-dark_secondary  lg:p-3 lg:rounded-sm lg:opacity-0 invisible lg:group-hover:opacity-100 lg:group-hover:visible lg:transition-opacity lg:duration-300 shadow-custom-lg">
              <p className="p-1 text-base cursor-pointer hover:bg-[#a99ce8] dark:hover:bg-dark_shade hover:dark:text-dark_secondary hover:text-primary transform hover:scale-110 transition-transform duration-300">
                <NavLink to="/patients#insurance">Insurance</NavLink>
              </p>
              <p className="p-1 text-base cursor-pointer hover:bg-[#a99ce8] dark:hover:bg-dark_shade hover:dark:text-dark_secondary hover:text-primary transform hover:scale-110 transition-transform duration-300">
                <NavLink to="/patients#membership-plans">
                  Membership Plans
                </NavLink>
              </p>
              <p className="p-1 text-base cursor-pointer hover:bg-[#a99ce8] dark:hover:bg-dark_shade hover:dark:text-dark_secondary hover:text-primary transform hover:scale-110 transition-transform duration-300">
                <NavLink to="/patients#faq">Pricing FAQ</NavLink>
              </p>
            </div>
          </li>
          <li className="hover:text-[#a99ce8] dark:hover:text-dark_shade duration-300 pb-2 relative group cursor-pointer">
            LOCATIONS
            <div className="z-50  absolute w-34 left-[58%] md:left-[55%] lg:top-full lg:-left-6  md:w-40 text-secondary bg-primary dark:bg-dark_primary dark:text-dark_secondary  p-3  rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 shadow-custom-lg">
              <p className="p-1 text-base cursor-pointer hover:bg-[#a99ce8] dark:hover:bg-dark_shade hover:dark:text-dark_secondary hover:text-primary transform hover:scale-110 transition-transform duration-300">
                <NavLink to="/location-san-francisco">San Francisco</NavLink>
              </p>
              <p className="p-1 text-base cursor-pointer hover:bg-[#a99ce8] dark:hover:bg-dark_shade hover:dark:text-dark_secondary hover:text-primary transform hover:scale-110 transition-transform duration-300">
                <NavLink to="/location-mountain-view">Mountain View</NavLink>
              </p>
            </div>
          </li>
          <li className="hover:text-[#a99ce8] dark:hover:text-dark_shade duration-300 pb-2 relative group cursor-pointer">
            <NavLink to="/appointment">APPOINTMENT</NavLink>
          </li>
          <li className="hover:text-[#a99ce8] dark:hover:text-dark_shade duration-300 pb-2 flex justify-center items-center gap-2">
            <FaUserCircle className="text-2xl" />
            {userName !== "LOGIN" ? (
              <span className="relative group">
                {userName}
                <div className="absolute w-34 left-[58%] md:left-[55%] lg:top-full lg:-left-10 lg:w-48 md:w-40 text-secondary bg-primary dark:bg-dark_primary dark:text-dark_secondary p-3 rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 shadow-custom-lg">
                  <p className="p-1 text-base cursor-pointer hover:bg-[#a99ce8] dark:hover:bg-dark_shade hover:dark:text-dark_secondary hover:text-primary transform hover:scale-110 transition-transform duration-300">
                    <NavLink to="/profile-settings">Profile Settings</NavLink>
                  </p>

                  <p className="p-1 text-base cursor-pointer hover:bg-[#a99ce8] dark:hover:bg-dark_shade hover:dark:text-dark_secondary hover:text-primary transform hover:scale-110 transition-transform duration-300">
                    <NavLink to="/appointment/details">
                      Book Appointment
                    </NavLink>
                  </p>
                  <p className="p-1 text-base cursor-pointer hover:bg-[#a99ce8] dark:hover:bg-dark_shade hover:dark:text-dark_secondary hover:text-primary transform hover:scale-110 transition-transform duration-300">
                    <NavLink to="/appointment-status">
                      Appointment Status
                    </NavLink>
                  </p>

                  <p className="p-1 text-base cursor-pointer hover:bg-[#a99ce8] dark:hover:bg-dark_shade hover:dark:text-dark_secondary hover:text-primary transform hover:scale-110 transition-transform duration-300">
                    <NavLink onClick={handleLogout} to="/login">
                      LOG OUT
                    </NavLink>
                  </p>
                </div>
              </span>
            ) : (
              <NavLink to="/login">{userName}</NavLink>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
