import React, { use } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import axios from "axios";

const JobPost = () => {
  const { user } = use(AuthContext);
  const handleJobPost = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const job = Object.fromEntries(formData.entries());

    const { requirements, responsibilities, max, min, currency, ...jobData } =
      job;

    // formet data structure
    jobData.salaryRange = { max, min, currency };
    const requirementsClearData = requirements.split(",").map((t) => t.trim());
    const responsibilitiesClearData = responsibilities
      .split(",")
      .map((t) => t.trim());
    jobData.requirements = requirementsClearData;
    jobData.responsibilities = responsibilitiesClearData;

    axios
      .post("http://localhost:3000/jobs", jobData)
      .then((data) => {
        if(data.data.insertedId){
          alert('Your job seccessfull add & publice to all')
          form.reset()
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="min-h-screen px-4 py-10 bg-base-100">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Post a New Job
        </h2>

        <form
          onSubmit={handleJobPost}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Job Title */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">Job Title</span>
            </label>
            <input
              type="text"
              name="title"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Company Name */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">Company Name</span>
            </label>
            <input
              type="text"
              name="company"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Location */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">Location</span>
            </label>
            <input
              type="text"
              name="location"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Job Type */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">Job Type</span>
            </label>
            <select
              name="jobType"
              className="select select-bordered w-full"
              required
            >
              <option disabled value="">
                Select Job Type
              </option>
              <option>Onsite</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
          </div>

          {/* Category */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">Job Category</span>
            </label>
            <input
              type="text"
              name="category"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Deadline */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">
                Application Deadline
              </span>
            </label>
            <input
              type="date"
              name="applicationDeadline"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Salary Min */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">Min Salary</span>
            </label>
            <input
              type="number"
              name="min"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Salary Max */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">Max Salary</span>
            </label>
            <input
              type="number"
              name="max"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Currency */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">Currency</span>
            </label>
            <select
              name="currency"
              className="select select-bordered w-full"
              required
            >
              <option disabled value="">
                Select currency
              </option>
              <option>BDT</option>
              <option>MRM</option>
              <option>USD</option>
            </select>
          </div>

          {/* HR Name */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">HR Name</span>
            </label>
            <input
              type="text"
              name="hr_name"
              defaultValue={user.displayName}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* HR Email */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">HR Email</span>
            </label>
            <input
              type="email"
              name="hr_email"
              defaultValue={user.email}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Company Logo */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">Company Logo URL</span>
            </label>
            <input
              type="url"
              name="company_logo"
              className="input input-bordered w-full"
            />
          </div>

          {/* Job Description */}
          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text font-medium">Job Description</span>
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            />
          </div>

          {/* Requirements */}
          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text font-medium">
                Requirements (comma separated)
              </span>
            </label>
            <textarea
              name="requirements"
              className="textarea textarea-bordered w-full"
              rows="3"
              required
            />
          </div>

          {/* Responsibilities */}
          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text font-medium">
                Responsibilities (comma separated)
              </span>
            </label>
            <textarea
              name="responsibilities"
              className="textarea textarea-bordered w-full"
              rows="3"
              required
            />
          </div>

          <div className="md:col-span-2">
            <button type="submit" className="btn btn-primary w-full">
              {" "}
              Post Job
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default JobPost;
