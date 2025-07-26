import axios from "axios";
import React, { useState, useEffect } from "react";

function AppointmentStatus() {
  const [data, setData] = useState([]);
  const [statuses, setStatuses] = useState([]); // Store status for each appointment

  const statusFun = async () => {
    const access_token = window.sessionStorage.getItem("admin_access_token");

    try {
      const response = await axios.get(
        `http://localhost:8080/admin/api/all-appointments`, // Update with your API URL
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      console.log(response);
      setData(response.data);
      setStatuses(response.data.map(() => "PENDING")); // Initialize statuses as 'PENDING'
    } catch (error) {
      console.error("Error fetching appointment status:", error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    const updatedStatuses = [...statuses];
    const index = data.findIndex((appointment) => appointment.id === id); // Find index based on ID
    updatedStatuses[index] = newStatus; // Update the status based on the index
    setStatuses(updatedStatuses);

    // Send updated status and ID to the API
    await sendStatusToApi(id, newStatus);
  };

  // Function to send the updated status and ID to the API
  const sendStatusToApi = async (id, status) => {
    const access_token = window.sessionStorage.getItem("admin_access_token");

    try {
      const response = await axios.put(
        `http://localhost:8080/admin/api/update-status`, // Update with your actual API URL
        {
          id: id, // Pass the unique ID from the appointment
          approve: status, // Pass the updated status
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      console.log(response);
      console.log(`Status for appointment with ID ${id} updated to ${status}`);
      window.location.reload();
    } catch (error) {
      console.error(
        `Error updating status for appointment with ID ${id}:`,
        error
      );
    }
  };

  useEffect(() => {
    statusFun(); // Call the function when the component mounts
  }, []);

  return (
    <div className="lg:w-full lg:h-[100vh] w-full h-[100vh] bg-primary text-secondary lg:px-24 lg:py-10 md:px-8 md:py-6 px-6 py-3">
      <h1 className="font-extrabold lg:text-5xl text-center lg:pb-5 md:text-3xl md:pb-3 text-2xl pb-2">
        APPOINTMENT STATUS
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-primary">
          <thead>
            <tr className="bg-secondary text-primary font-bold">
              <th className="px-4 py-2 text-center border border-primary">
                ID
              </th>
              <th className="px-4 py-2 text-center border border-primary">
                NAME
              </th>
              <th className="px-4 py-2 text-center border border-primary">
                EMAIL
              </th>
              <th className="px-4 py-2 text-center border border-primary">
                PHONE NUMBER
              </th>
              <th className="px-4 py-2 text-center border border-primary">
                PROBLEM
              </th>
              <th className="px-4 py-2 text-center border border-primary">
                OTHER'S PROBLEM
              </th>
              <th className="px-4 py-2 text-center border border-primary">
                BRANCH
              </th>
              <th className="px-4 py-2 text-center border border-primary">
                APPOINTMENT
              </th>
              <th className="px-4 py-2 text-center border border-primary">
                STATUS
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((eachobj) => (
              <tr key={eachobj.id} className="bg-shade text-primary">
                <td className="px-4 py-2 text-center lg:text-sm border border-primary">
                  {eachobj.id}
                </td>
                <td className="px-4 py-2 text-center lg:text-sm border border-primary">
                  {eachobj.fullName}
                </td>
                <td className="px-4 py-2 text-center lg:text-sm border border-primary">
                  {eachobj.email}
                </td>
                <td className="px-4 py-2 text-center lg:text-sm border border-primary">
                  {eachobj.phoneNumber}
                </td>
                <td className="px-4 py-2 text-center lg:text-sm border border-primary">
                  {eachobj.problem}
                </td>
                <td className="px-4 py-2 text-center lg:text-sm border border-primary">
                  {eachobj.otherProblem !== "" ? eachobj.otherProblem : "-"}
                </td>
                <td className="px-4 py-2 text-center lg:text-sm border border-primary">
                  {eachobj.branch}
                </td>
                <td className="px-4 py-2 text-center lg:text-sm border border-primary">
                  {eachobj.appointmentDateTime}
                </td>
                <td className="px-4 py-2 text-center lg:text-sm border border-primary">
                  {eachobj.approve !== "PENDING" ? (
                    "DONE"
                  ) : (
                    <select
                      className="w-[70%] text-xs bg-primary text-secondary font-semibold focus:outline-none"
                      value={
                        statuses[
                          data.findIndex(
                            (appointment) => appointment.id === eachobj.id
                          )
                        ]
                      }
                      onChange={(e) =>
                        handleStatusChange(eachobj.id, e.target.value)
                      }
                    >
                      <option className="font-semibold" value="PENDING">
                        PENDING
                      </option>
                      <option className="font-semibold" value="ACCEPT">
                        ACCEPT
                      </option>
                      <option className="font-semibold" value="REJECT">
                        REJECT
                      </option>
                    </select>
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
