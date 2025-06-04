import axios from "axios";
import React, { use, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyPostJobs = ({ myJobsPostedPromise }) => {
  const myJobsData = use(myJobsPostedPromise);

  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState({});

  const handleEditClick = (job) => {
    setEditingJob(job);
    setFormData({ ...job });
    document.getElementById("editJobModal").showModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:3000/postedJobs/${editingJob._id}`, formData)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire("Updated!", "Job info has been updated.", "success");
        }
        document.getElementById("editJobModal").close();
      })
      .catch((err) => console.error(err));
  };

  const handleJobDelte = (job_id) => {
    axios
      .delete(`http://localhost:3000/postedJobs/${job_id}`)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-zebra border border-gray-200 text-sm">
        <thead className="bg-indigo-100 text-indigo-800 text-sm">
          <tr>
            <th>#</th>
            <th className="min-w-[120px]">Title</th>
            <th className="min-w-[100px] hidden sm:table-cell">Location</th>
            <th className="min-w-[100px] hidden md:table-cell">Category</th>
            <th className="min-w-[120px] hidden lg:table-cell">Deadline</th>
            <th className="min-w-[160px]">Action</th>
          </tr>
        </thead>
        <tbody>
          {myJobsData.map((job, index) => (
            <tr key={job._id}>
              <td>{index + 1}</td>
              <td className="text-indigo-700 font-medium">{job.title}</td>
              <td className="hidden sm:table-cell">{job.location}</td>
              <td className="hidden md:table-cell">{job.category}</td>
              <td className="hidden lg:table-cell">{job.applicationDeadline}</td>
              <td className="flex flex-col sm:flex-row gap-1">
                <Link
                  to={`/viewApplications/${job._id}`}
                  className="btn btn-xs btn-outline btn-info"
                >
                  View applications
                </Link>
                <button
                  onClick={() => handleEditClick(job)}
                  className="btn btn-xs btn-outline btn-warning"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleJobDelte(job._id)}
                  className="btn btn-xs btn-outline btn-error"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Job Modal */}
      <dialog id="editJobModal" className="modal">
        <div className="modal-box w-11/12 max-w-2xl">
          <h3 className="font-bold text-lg mb-4">Edit Job Posting</h3>
          <form onSubmit={handleUpdateSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={handleInputChange}
              placeholder="Job Title"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="location"
              value={formData.location || ""}
              onChange={handleInputChange}
              placeholder="Location"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="category"
              value={formData.category || ""}
              onChange={handleInputChange}
              placeholder="Category"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="applicationDeadline"
              value={formData.applicationDeadline || ""}
              onChange={handleInputChange}
              placeholder="Application Deadline"
              className="input input-bordered w-full"
              required
            />
            <button type="submit" className="btn btn-primary w-full">
              Update
            </button>
          </form>
          <form method="dialog" className="mt-4">
            <button className="btn btn-sm btn-ghost">Close</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyPostJobs;
