import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

function AppointmentStatus() {
  const [data, setData] = useState([]);
  const access_token = window.localStorage.getItem("access_token");

  const statusFun = async () => {
    const username = window.localStorage.getItem("username");

    try {
      const response = await axios.get(
        `http://localhost:8080/user/appointments/history-status/${username}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching appointment status:", error);
    }
  };

  const handleCancel = async (id) => {
    try {
      // Show loading toast
      const loadingToast = toast.loading("Processing...");

      // Make the delete request
      const response = await axios.delete(
        `http://localhost:8080/user/appointments/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      // Success message
      toast.update(loadingToast, {
        render: "Successfully cancelled appointment!",
        type: "success",
        isLoading: false,
        autoClose: 3000, // Close after 3 seconds
      });

      console.log(response.data);

      // Reload page after a delay
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      // Error handling
      toast.update(loadingToast, {
        render: "Failed to cancel appointment.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      console.log(error);
    }
  };

  useEffect(() => {
    statusFun(); // Call the function when the component mounts
  }, []);

  const handleCan = (date, id, approve) => {
    const currentDateTime = new Date();
    const appointmentDate = new Date(date);
    const demo = new Date("2024-10-14 20:00");

    console.log(currentDateTime > appointmentDate);
    // console.log(currentDateTime > demo);

    // Check if the current time is greater than the appointment time
    console.log(approve);
    if (currentDateTime > appointmentDate) {
      if (approve === "ACCEPT") {
        // Send email for completed appointment
        axios
          .get(`http://localhost:8080/user/appointments/send-email/${id}`, {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
        return "COMPLETED";
      } else if (approve === "PENDING") {
        // Send email for pending appointment
        axios
          .get(`http://localhost:8080/user/appointments/pending-email/${id}`, {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
        return "NOT PROCCED";
      } else if (approve === "REJECT") {
        return "NOT PROCCED";
      }
    }

    // If the current time is not greater than the appointment time
    return "NOT CANCELABLE";
  };

  return (
    <div className="lg:w-full lg:h-[100vh] md:w-full md:h-[100vh] w-full h-[100vh] bg-primary dark:bg-dark_primary text-secondary lg:px-24 lg:py-10 md:px-14 md:py-6 px-6 py-3">
      <ToastContainer />
      <h1 className="font-extrabold lg:text-5xl text-center lg:pb-5 md:text-3xl md:pb-3 text-2xl pb-2">
        APPOINTMENT STATUS
      </h1>

      {/* Table for Appointment Status */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-primary dark:border-dark_primary">
          <thead>
            <tr className="bg-secondary text-primary dark:text-dark_primary font-bold text-sm">
              <th className="px-4 py-2 text-center border border-primary dark:border-dark_primary">
                NAME
              </th>
              <th className="px-4 py-2 text-center border border-primary dark:border-dark_primary">
                Phone
              </th>
              <th className="px-4 py-2 text-center border border-primary dark:border-dark_primary">
                TREATMENT
              </th>
              <th className="px-4 py-2 text-center border border-primary dark:border-dark_primary">
                Other's TREATMENT
              </th>
              <th className="px-4 py-2 text-center border border-primary dark:border-dark_primary">
                DOCTOR
              </th>
              <th className="px-4 py-2 text-center border border-primary dark:border-dark_primary">
                APPOINTMENT
              </th>
              <th className="px-4 py-2 text-center border border-primary dark:border-dark_primary">
                FEE
              </th>
              <th className="px-4 py-2 text-center border border-primary dark:border-dark_primary">
                STATUS
              </th>
              <th className="px-4 py-2 text-center border border-primary dark:border-dark_primary">
                CANCEL
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((eachobj) => (
              <tr
                key={eachobj.id}
                className="bg-shade text-primary dark:text-dark_primary"
              >
                <td className="px-4 py-2 text-center lg:text-sm md:text-[9px] text-[6px] border border-primary dark:border-dark_primary">
                  {eachobj.fullName}
                </td>
                <td className="px-4 py-2 text-center lg:text-sm md:text-[9px] text-[6px] border border-primary dark:border-dark_primary">
                  {eachobj.phoneNumber}
                </td>
                <td className="px-4 py-2 text-center lg:text-sm md:text-[9px] text-[6px] border border-primary dark:border-dark_primary">
                  {eachobj.problem}
                </td>
                <td className="px-4 py-2 text-center lg:text-sm md:text-[9px] text-[6px] border border-primary dark:border-dark_primary">
                  {eachobj.otherProblem != "" ? eachobj.otherProblem : "-"}
                </td>
                <td className="px-4 py-2 text-center lg:text-sm md:text-[9px] text-[6px] border border-primary dark:border-dark_primary">
                  {eachobj.doctor}
                </td>
                <td className="px-4 py-2 text-center lg:text-sm md:text-[9px] text-[6px] border border-primary dark:border-dark_primary">
                  {eachobj.appointmentDateTime}
                </td>
                <td className="px-4 py-2 text-center lg:text-sm md:text-[9px] text-[6px] border border-primary dark:border-dark_primary">
                  {eachobj.totalFees}$
                </td>
                <td
                  className={`px-4 py-2 text-center lg:text-sm md:text-[9px] text-[6px] font-bold border border-primary dark:border-dark_primary ${
                    eachobj.approve === "ACCEPT"
                      ? `text-[#47fb6b]`
                      : eachobj.approve === "REJECT"
                      ? `text-[#ff4444]`
                      : `text-primary`
                  }`}
                >
                  {eachobj.approve}
                </td>
                <td className="px-4 py-2 text-center lg:text-sm md:text-[9px] text-[6px] border border-primary dark:border-dark_primary">
                  {eachobj.approve === "PENDING" ? (
                    handleCan(
                      eachobj.appointmentDateTime,
                      eachobj.id,
                      eachobj.approve
                    )
                  ) : eachobj.approve !== "ACCEPT" &&
                    eachobj.approve !== "REJECT" ? (
                    <button
                      className="rounded-sm p-1 bg-[#ff7373] hover:bg-secondary duration-300 cursor-pointer"
                      onClick={() => handleCancel(eachobj.id)}
                    >
                      CANCEL
                    </button>
                  ) : (
                    handleCan(
                      eachobj.appointmentDateTime,
                      eachobj.id,
                      eachobj.approve
                    )
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AppointmentStatus;
