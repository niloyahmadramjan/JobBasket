import React from "react";
import { useParams } from "react-router";
import applyAnimation from "../../assets/lotties/apply.json"
import { Player } from "@lottiefiles/react-lottie-player";


const ApplyJob = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Lottie Section */}
        <div className="hidden md:flex justify-center">
          <Player
            autoplay
            loop
            src={applyAnimation}
            style={{ height: "650px", width: "650px" }}
          />
        </div>

        {/* Form Section */}
        <div className="card w-full bg-base-100 shadow-xl p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Apply for the Job</h2>
          <form className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Phone Number</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Resume Link</span>
              </label>
              <input
                type="text"
                className="file-input file-input-bordered w-full"
                
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Cover Letter</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                rows="4"
                placeholder="Write a short cover letter..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;
