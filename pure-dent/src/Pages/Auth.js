// auth.js
import axios from "axios";

export const logoutUser = async (navigate) => {
  const access_token = window.localStorage.getItem("access_token");

  window.localStorage.removeItem("login");
  window.localStorage.removeItem("username");
  window.localStorage.removeItem("access_token");
  window.localStorage.removeItem("refresh_token");
  window.localStorage.removeItem("dark");

  try {
    await axios.get(`http://localhost:8080/user/logout`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (error) {
    console.error("Error during logout:", error);
  }
  window.location.reload();

  navigate("/login");
};
