import React, { use } from "react";

const MyApplications = ({ myApplicationPromise }) => {
  const application = use(myApplicationPromise);



  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
        Applied Jobs
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-indigo-100 text-indigo-700">
              <th className="px-4 py-2 text-left">Job Title</th>
              <th className="px-4 py-2 text-left">Company</th>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Applied On</th>
            </tr>
          </thead>
          <tbody>
            {application.length > 0 ? (
              application.map((job) => (
                <tr
                  key={job.id}
                  className="border-b hover:bg-indigo-50 transition"
                >
                  <td className="px-4 py-3">{job.title}</td>
                  <td className="px-4 py-3">{job.company}</td>
                  <td className="px-4 py-3">{job.location}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        job.status === "Under Review"
                          ? "bg-yellow-100 text-yellow-800"
                          : job.status === "Interview Scheduled"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{job.applicationDeadline}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  You haven't applied to any jobs yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
