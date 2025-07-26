import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const login = window.sessionStorage.getItem("admin_login");
  const username = window.sessionStorage.getItem("admin_username");

  const handleLogout = async () => {
    const access_token = window.sessionStorage.getItem("admin_access_token");
    console.log(access_token);
    window.sessionStorage.removeItem("admin_login");
    window.sessionStorage.removeItem("admin_username");
    window.sessionStorage.removeItem("admin_access_token");
    window.sessionStorage.removeItem("admin_refresh_token");

    try {
      const response = await axios.get(`http://localhost:8080/admin/logout`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error("Error during logout:");
    }

    navigate("/");
  };
  return (
    <div className="w-full h-full bg-primary text-secondary lg:p-2 shadow-md shadow-secondary flex justify-between">
      <h1 className="md:text-4xl p-3 font-extrabold text-xl">
        PURE DENT ADMIN
      </h1>
      <h1 className="text-2xl p-3 px-16 font-extrabold">
        {login ? (
          <div className="relative group cursor-pointer">
            {username}
            <div className="z-50  absolute w-34 left-[58%] md:left-[-25%] lg:top-full lg:-left-6  md:w-40 text-secondary bg-primary lg:bg-primary lg:text-secondary p-3  rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 shadow-custom-lg">
              <p className="p-1 text-base cursor-pointer hover:bg-[#a99ce8] hover:text-primary transform hover:scale-110 transition-transform duration-300">
                <NavLink onClick={handleLogout} to="/">
                  LOG OUT
                </NavLink>
              </p>
            </div>
          </div>
        ) : (
          "LOGIN"
        )}
      </h1>
    </div>
  );
}

export default Navbar;
