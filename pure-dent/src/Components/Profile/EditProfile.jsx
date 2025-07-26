import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function EditProfile() {
  const access_token = window.localStorage.getItem("access_token");

  const [userData, setUserData] = useState({
    user: "",
    email: "",
    phonenumber: "",
    firstname: "",
    lastname: "",
    city: "",
    state: "",
    country: "",
    gender: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const username = window.localStorage.getItem("username");
    axios
      .get(`http://localhost:8080/user/user-details/${username}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((response) => {
        setUserData({
          ...userData,
          ...response.data,
        });
        console.log(response);
      })
      .catch((error) => {
        console.error("There was an error fetching the user data!", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditing(true);
  };

  const handleSave = async (e) => {
    e.preventDefault(); // prevent form from submitting the traditional way

    try {
      const response = await axios.put(
        `http://localhost:8080/user/update`,
        {
          firstname: userData.firstname,
          lastname: userData.lastname,
          gender: userData.gender,
          city: userData.city,
          state: userData.state,
          country: userData.country,
          phonenumber: userData.phonenumber,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      console.log("User data updated:", response.data);
      toast.success("Successfully Updated!");
      setIsEditing(false); // disable editing after saving
    } catch (error) {
      console.error("There was an error updating the user data!", error);
      toast.error("Something Went Wrong!");
    }
  };
  return (
    <div className="bg-primary dark:bg-dark_primary text-secondary lg:w-full lg:h-full lg:p-16  md:p-8 rounded-sm md:h-[88vh] w-[95%] p-4 h-[91vh]">
      <ToastContainer />
      <h2 className="text-center lg:text-6xl md:text-4xl font-extrabold lg:mb-12 md:mb-7 mb-2 capitalize text-base">
        PROFILE DETAILS
      </h2>
      <form onSubmit={handleSave}>
        <div className="lg:grid lg:grid-cols-3 lg:gap-2 lg:gap-x-16 md:grid md:grid-cols-2 md:gap-6 grid gap-2">
          <div className="lg:mb-4">
            <label className="block md:text-lg font-bold  md:mb-0 mb-0 text-sm">
              Username
            </label>
            <input
              type="text"
              name="user"
              value={userData.user || ""} // Use "" if value is null or undefined
              onChange={handleInputChange}
              disabled={true}
              className={`rounded-sm px-1 md:p-1 lg:p-2 w-full bg-shade text-primary dark:text-dark_primary text-sm md:text-base`}
            />
          </div>

          <div className="lg:mb-4">
            <label className="block md:text-lg font-bold  md:mb-0 mb-0 text-sm">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={userData.email || ""}
              onChange={handleInputChange}
              disabled={true}
              className={`rounded-sm px-1 md:p-1 lg:p-2 focus:outline-none w-full bg-shade text-primary dark:text-dark_primary  text-sm md:text-base`}
            />
          </div>

          <div className="lg:mb-4">
            <label className="block md:text-lg font-bold  md:mb-0 mb-0 text-sm">
              Phone Number
            </label>
            <input
              type="tel"
              name="phonenumber"
              value={userData.phonenumber || ""}
              onChange={handleInputChange}
              disabled={true}
              className={`rounded-sm px-1 md:p-1 lg:p-2 focus:outline-none w-full bg-shade text-primary dark:text-dark_primary  text-sm md:text-base`}
            />
          </div>

          <div className="lg:mb-4">
            <label className="block md:text-lg font-bold  md:mb-0 mb-0 text-sm">
              Firstname
            </label>
            <input
              type="text"
              autoFocus
              name="firstname"
              value={userData.firstname || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`rounded-sm px-1 md:p-1 lg:p-2 focus:outline-none w-full text-sm md:text-base ${
                !isEditing
                  ? `text-primary dark:text-dark_primary  bg-shade`
                  : `bg-secondary text-primary dark:text-dark_primary  `
              }`}
            />
          </div>

          <div className="lg:mb-4">
            <label className="block md:text-lg font-bold md:mb-0 mb-0 text-sm">
              Lastname
            </label>
            <input
              type="text"
              name="lastname"
              value={userData.lastname || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`rounded-sm px-1 md:p-1 lg:p-2 focus:outline-none w-full text-sm md:text-base ${
                !isEditing
                  ? `text-primary dark:text-dark_primary  bg-shade`
                  : `bg-secondary text-primary dark:text-dark_primary `
              }`}
            />
          </div>

          <div className="lg:mb-4">
            <label className="block md:text-lg font-bold md:mb-0 mb-0 text-sm">
              City
            </label>
            <input
              type="text"
              name="city"
              value={userData.city || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`rounded-sm px-1 md:p-1 lg:p-2 focus:outline-none w-full text-sm md:text-base ${
                !isEditing
                  ? `text-primary dark:text-dark_primary  bg-shade`
                  : `bg-secondary text-primary dark:text-dark_primary `
              }`}
            />
          </div>

          <div className="lg:mb-4">
            <label className="block md:text-lg font-bold md:mb-0 mb-0 text-sm">
              State
            </label>
            <input
              type="text"
              name="state"
              value={userData.state || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`rounded-sm px-1 md:p-1 lg:p-2 focus:outline-none w-full text-sm md:text-base ${
                !isEditing
                  ? `text-primary dark:text-dark_primary  bg-shade`
                  : `bg-secondary text-primary dark:text-dark_primary `
              }`}
            />
          </div>

          <div className="lg:mb-4">
            <label className="block md:text-lg font-bold md:mb-0 mb-0 text-sm">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={userData.country || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`rounded-sm px-1 md:p-1 lg:p-2 focus:outline-none w-full text-sm md:text-base ${
                !isEditing
                  ? `text-primary dark:text-dark_primary  bg-shade`
                  : `bg-secondary text-primary dark:text-dark_primary `
              }`}
            />
          </div>

          <div className="lg:mb-4">
            <label className="block md:text-lg font-bold md:mb-0 mb-0 text-sm">
              Gender
            </label>
            <select
              name="gender"
              value={userData.gender || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`rounded-sm px-1 md:p-1 lg:p-2 focus:outline-none w-full text-sm md:text-base ${
                !isEditing
                  ? `text-primary dark:text-dark_primary  bg-shade`
                  : `bg-secondary text-primary dark:text-dark_primary `
              }`}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Save or Edit Button */}
        </div>
        <div className="lg:col-span-3 lg:mb-4 text-center md:mt-8 mt-5">
          {isEditing ? (
            <button
              type="submit"
              className="bg-secondary text-primary dark:text-dark_primary  hover:bg-shade hover:text-primary p-2 rounded-sm  duration-300 md:px-5 px-3 py-1 md:py-2 text-sm md:text-lg"
            >
              Save Profile
            </button>
          ) : (
            <button
              type="button"
              onClick={handleEdit} // Call handleEdit on click
              className="bg-secondary text-primary dark:text-dark_primary  hover:bg-shade hover:text-primary rounded-sm  duration-300 md:px-5 px-3 py-1 md:py-2 text-sm md:text-xl"
            >
              Edit Profile
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
