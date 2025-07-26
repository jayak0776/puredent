import React, { useState } from "react";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";
import { NavLink, useNavigate } from "react-router-dom";
import { RiProfileLine } from "react-icons/ri";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { TbDental } from "react-icons/tb";
import { BsClipboard2DataFill } from "react-icons/bs";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import { RiLogoutBoxRFill } from "react-icons/ri";
import DarkTheme from "./DarkTheme";
import { logoutUser } from "../../Pages/Auth";
import { TbHttpDelete } from "react-icons/tb";

function ProfileSettings() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("profile");

  const renderComponent = () => {
    switch (currentPage) {
      case "profile":
        return <EditProfile />;
      case "changePassword":
        return <ChangePassword />;
      case "darkTheme":
        return <DarkTheme />;
      case "deleteAccount":
        return <DeleteAccount />;
      case "logout":
        return <DarkTheme />;
      default:
        return <EditProfile />;
    }
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
  const handleChangePassword = () => {};

  return (
    <div className="text-secondary bg-primary dark:bg-dark_primary w-full lg:h-[89vh] lg:flex lg:items-center md:h-[93.5vh] md:flex md:w-full flex">
      {/* Sidebar */}
      <div className="lg:w-[23%] lg:h-[100%] text-secondary bg-primary dark:bg-dark_primary rounded-sm md:rounded-md lg:p-7 md:h-[100%] md:w-[45%] md:p-5 flex flex-col w-[45%] p-1">
        {/* Profile Details */}
        <div className="text-secondary bg-primary dark:bg-dark_primary w-full h-full lg:p-3 rounded-sm md:p-3 p-2">
          <h1 className="lg:text-4xl lg:py-2 md:text-2xl font-extrabold md:py-3 text-sm py-2">
            PROFILE SETTINGS
          </h1>
          <hr className="lg:border-2 border-shade lg:mt-5" />
          <p
            onClick={() => setCurrentPage("profile")}
            className="lg:text-xl lg:pl-4 md:px-2 lg:py-3 py-1 md:text-lg md:py-2 font-medium text-secondary hover:scale-105 cursor-pointer hover:text-shade duration-300 text-xs rounded-sm lg:rounded-md flex gap-1 md:gap-2"
          >
            <span>
              <RiProfileLine className="lg:text-3xl md:text-2xl text-lg md:pt-1 lg:pt-0" />
            </span>
            <span>Profile Details</span>
          </p>
          <hr className="lg:border-2 border-shade" />
          <p
            onClick={() => setCurrentPage("changePassword")}
            className="lg:text-xl lg:pl-4 md:px-2 lg:py-3 py-1 md:text-lg md:py-2 font-medium text-secondary hover:scale-105 cursor-pointer hover:text-shade duration-300 text-xs rounded-sm lg:rounded-md flex gap-1 md:gap-2"
          >
            <span className="lg:text-3xl md:text-2xl text-lg md:pt-1 lg:pt-0">
              <MdOutlinePublishedWithChanges />
            </span>
            <span>Change Password</span>
          </p>
          <hr className="lg:border-2 border-shade" />
          <p className="lg:text-xl lg:pl-4 md:px-2 lg:py-3 py-1 md:text-lg md:py-2 font-medium text-secondary hover:scale-105 cursor-pointer hover:text-shade duration-300 text-xs rounded-sm lg:rounded-md">
            <NavLink to="/appointment/details" className="flex gap-1 md:gap-2">
              <span className="lg:text-3xl md:text-2xl text-lg md:pt-1 lg:pt-0">
                <TbDental />
              </span>
              <span>Book Appointment</span>
            </NavLink>
          </p>
          <hr className="lg:border-2 border-shade" />
          <p className="lg:text-xl lg:pl-4 md:px-2 lg:py-3 py-1 md:text-lg md:py-2 font-medium text-secondary hover:scale-105 cursor-pointer hover:text-shade duration-300 text-xs rounded-sm lg:rounded-md">
            <NavLink to="/appointment-status" className="flex gap-1 md:gap-2">
              <span className="lg:text-3xl md:text-2xl text-lg md:pt-1 lg:pt-0">
                <BsClipboard2DataFill />
              </span>
              <span>Appointment Status</span>
            </NavLink>
          </p>
          <hr className="lg:border-2 border-shade" />
          <p
            onClick={() => setCurrentPage("darkTheme")}
            className="lg:text-xl lg:pl-4 md:px-2 lg:py-3 py-1 md:text-lg md:py-2 font-medium text-secondary hover:scale-105 cursor-pointer hover:text-shade duration-300 text-xs rounded-sm lg:rounded-md"
          >
            <div className="flex gap-1 md:gap-2">
              <span className="lg:text-3xl md:text-2xl text-lg md:pt-1 lg:pt-0">
                <CgDarkMode />
              </span>
              <span>Dark Theme</span>
            </div>
          </p>
          <hr className="lg:border-2 border-shade" />
          <p
            onClick={() => setCurrentPage("deleteAccount")}
            className="lg:text-xl lg:pl-4 md:px-2 lg:py-3 py-1 md:text-lg md:py-2 font-medium text-secondary hover:scale-105 cursor-pointer hover:text-shade duration-300 text-xs rounded-sm lg:rounded-md"
          >
            <div className="flex gap-1 md:gap-2">
              <span className="lg:text-3xl md:text-2xl text-lg md:pt-1 lg:pt-0">
                <TbHttpDelete />
              </span>
              <span>Delete Account</span>
            </div>
          </p>
          <hr className="lg:border-2 border-shade" />
          <p
            onClick={handleChangePassword}
            className="lg:text-xl lg:pl-4 md:px-2 lg:py-3 py-1 md:text-lg md:py-2 font-medium text-secondary hover:scale-105 cursor-pointer hover:text-shade duration-300 text-xs rounded-sm lg:rounded-md"
          >
            <NavLink to="/terms-conditions" className="flex gap-1 md:gap-2">
              <span className="lg:text-3xl md:text-2xl text-lg md:pt-1 lg:pt-0">
                <MdOutlinePrivacyTip />
              </span>
              <span>Terms & Conditions</span>
            </NavLink>
          </p>
          <hr className="lg:border-2 border-shade" />
          <p
            onClick={handleChangePassword}
            className="lg:text-xl lg:pl-4 md:px-2 lg:py-3 py-1 md:text-lg md:py-2 font-medium text-secondary hover:scale-105 cursor-pointer hover:text-shade duration-300 text-xs rounded-sm lg:rounded-md"
          >
            <NavLink
              onClick={handleLogout}
              to="/login"
              className="flex gap-1 md:gap-2"
            >
              <span className="lg:text-3xl md:text-2xl text-lg md:pt-1 lg:pt-0">
                <RiLogoutBoxRFill />
              </span>
              <span>Logout</span>
            </NavLink>
          </p>
          <hr className="lg:border-2 border-shade" />
        </div>
      </div>
      {/* Profile Form */}
      <div className="lg:w-[80%] lg:h-[100%] bg-secondary rounded-sm lg:p-7 md:p-10 md:pr-4 md:w-[80%] md:h-[93.5vh] h-[91vh]">
        <div className="lg:p-2 rounded-sm lg:bg-shade lg:w-[100%] lg:h-[100%]">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;
