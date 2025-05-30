import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const jobData = useLoaderData();
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo,
  } = jobData;
  return (
    <div className="w-full px-4 py-10 bg-base-200">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-6 md:p-10 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={company_logo}
              alt="Company Logo"
              className="w-14 h-14 rounded-xl bg-base-100 p-2"
            />
            <div>
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-sm text-gray-500">
                {company} - {location}
              </p>
            </div>
          </div>
          <div className="badge badge-outline badge-primary text-sm p-3">
            {jobType}
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Job Description</h3>
          <p className="text-gray-700">{description}</p>
        </div>

        {/* Requirements */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Requirements</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>

        {/* Responsibilities */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {responsibilities.map((res, i) => (
              <li key={i}>{res}</li>
            ))}
          </ul>
        </div>

        {/* Other Info */}
        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
          <div>
            <p className="font-semibold">Category:</p>
            <p>{category}</p>
          </div>
          <div>
            <p className="font-semibold">Deadline:</p>
            <p>{applicationDeadline}</p>
          </div>
          <div>
            <p className="font-semibold">Salary:</p>
            <p>
              {salaryRange.min} - {salaryRange.max}{" "}
              {salaryRange.currency.toUpperCase()}
            </p>
          </div>
        </div>

        {/* HR Contact */}
        <div className="border-t pt-6 text-sm">
          <h3 className="font-semibold text-lg mb-2">HR Contact</h3>
          <p>
            <strong>Name:</strong> {hr_name}
          </p>
          <p>
            <strong>Email:</strong> {hr_email}
          </p>
        </div>

        {/* Apply Button */}
        <div className="flex justify-end">
          <Link to={`/applyJob/${_id}`} className="btn btn-primary px-6">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
