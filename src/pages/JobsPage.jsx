import React, { Suspense, use } from "react";
import { NavLink } from "react-router";
import JobList from "../features/jobs/jobList";

const jobsPromise = fetch('http://localhost:3000/jobs').then(res=>res.json())

const JobsPage = () => {
    const jobsData = use(jobsPromise)
  return (
    <div className="bg-base-100 text-base-content p-4">
      <div>
        <h1 className="text-3xl font-bold text-center mb-2">Jobs of the day</h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Search and connect with the right candidates faster.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-all duration-300 ease-in-out btn btn-sm btn-outline hover:btn-primary ${
                  isActive ? "bg-primary text-white" : ""
                }`
              }
            >
              Management
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/marketing"
              className={({ isActive }) =>
                `transition-all duration-300 ease-in-out btn btn-sm btn-outline hover:btn-primary ${
                  isActive ? "bg-primary text-white" : ""
                }`
              }
            >
              Marketing & Sale
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/finance"
              className={({ isActive }) =>
                `transition-all duration-300 ease-in-out btn btn-sm btn-outline hover:btn-primary ${
                  isActive ? "bg-primary text-white" : ""
                }`
              }
            >
              Finance
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/humanResource"
              className={({ isActive }) =>
                `transition-all duration-300 ease-in-out btn btn-sm btn-outline hover:btn-primary ${
                  isActive ? "bg-primary text-white" : ""
                }`
              }
            >
              Human Resource
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/retailProducts"
              className={({ isActive }) =>
                `transition-all duration-300 ease-in-out btn btn-sm btn-outline hover:btn-primary ${
                  isActive ? "bg-primary text-white" : ""
                }`
              }
            >
              Retail & Products
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/contentWriter"
              className={({ isActive }) =>
                `transition-all duration-300 ease-in-out btn btn-sm btn-outline hover:btn-primary ${
                  isActive ? "bg-primary text-white" : ""
                }`
              }
            >
              Content Writer
            </NavLink>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Job Card */}
             <Suspense fallback='Loading...'>
                {
                    jobsData.map(job => <JobList key={job._id} job={job}></JobList>)
                }
             </Suspense>

        </div>
      </div>
    </div>
  );
};

export default JobsPage;
