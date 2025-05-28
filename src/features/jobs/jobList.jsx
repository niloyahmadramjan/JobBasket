import React from "react";
import { Link } from "react-router";

const JobList = ({ job }) => {
  const {
    title,
    location,
    jobType,
    _id,
    applicationDeadline,
    requirements,
    company_logo,
    company,
    description,
    salaryRange,
  } = job;
  return (
   <div className="card border border-base-300 h-full shadow-md p-4 rounded-xl w-full mx-auto flex flex-col justify-between">
  {/* Top Content */}
  <div>
    <div className="flex justify-between items-start mb-3">
      <div className="flex gap-3 items-center">
        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
          <img src={company_logo} alt="company Logo" className="w-6 h-6" />
        </div>
        <div>
          <h2 className="font-semibold text-lg">{company}</h2>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </div>
      <div className="text-green-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>
    </div>

    <h3 className="text-base font-bold mb-1">{title}</h3>
    <p className="text-xs text-gray-500 flex items-center gap-2 mb-3">
      <span className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17v-2a4 4 0 018 0v2m-4-6a4 4 0 100-8 4 4 0 000 8z"
          />
        </svg>
        {jobType}
      </span>
      Last Date: {applicationDeadline}
    </p>

    <p className="text-sm text-gray-600 mb-3 line-clamp-3">{description}</p>

    <div className="flex flex-wrap gap-2 mb-4">
      {requirements.map((requirement, index) => (
        <div key={index} className="badge badge-ghost px-3 py-2">
          {requirement}
        </div>
      ))}
    </div>
  </div>

  {/* Footer - stays at bottom */}
  <div className="flex justify-between items-center mt-auto pt-2">
    <p className="text-sm text-gray-600 font-normal">
      {salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()}
    </p>
    <Link
      to={`/applyJob/${_id}`}
      className="btn btn-sm btn-outline btn-primary"
    >
      Apply Now
    </Link>
  </div>
</div>

  );
};

export default JobList;
