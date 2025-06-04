import axios from "axios";
import React from "react";
import { Link, useLoaderData } from "react-router";

const ViewApplications = () => {
  const applicationData = useLoaderData();

  const handleStatusChange = (e, app_id) => {
    const status = e.target.value;

    axios
      .patch(`http://localhost:3000/status/${app_id}`, {
        status: status,
      })
      .then((data) => {
        console.log("update data", data.data);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  console.log(applicationData);
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-zebra border border-gray-200 text-sm">
        <thead className="bg-indigo-100 text-indigo-800 text-sm">
          <tr>
            <th>#</th>
            <th className="min-w-[140px]">Name</th>
            <th className="min-w-[160px] hidden sm:table-cell">Email</th>
            <th className="min-w-[100px]">Phone</th>
            <th className="min-w-[120px] hidden md:table-cell">Applied On</th>
            <th className="min-w-[120px] hidden lg:table-cell">CV</th>
            <th className="min-w-[140px]">Action</th>
          </tr>
        </thead>
        <tbody>
          {applicationData.map((application, index) => (
            <tr key={application._id}>
              <td>{index + 1}</td>
              <td className="font-semibold text-indigo-700">
                {application.name}
              </td>
              <td className="hidden sm:table-cell">{application.email}</td>
              <td>{application.phoneNumber}</td>
              <td className="hidden md:table-cell">{application.appliedOn}</td>
              <td className="hidden lg:table-cell">
                <Link
                  to={application.resume}
                  className="link link-primary text-sm"
                  target="_blank"
                >
                  View CV
                </Link>
              </td>
              <td className="flex flex-col sm:flex-row gap-1">
                <select
                  onChange={(e) => handleStatusChange(e, application._id)}
                  defaultValue={application.status}
                  className="select select-accent"
                >
                  <option disabled value="">
                    Update Status
                  </option>
                  <option value="Pending">Pending</option>
                  <option value="Interview">Interview</option>
                  <option value="Hired">Hired</option>
                  <option value="Reject">Reject</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplications;
