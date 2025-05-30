import React, { use } from "react";
import { Link, useLoaderData } from "react-router";
import applyAnimation from "../../assets/lotties/apply.json";
import { Player } from "@lottiefiles/react-lottie-player";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthContext";

const ApplyJob = () => {
  const {_id,title} = useLoaderData()
  const {user} = use(AuthContext)

  const handleApplicationsForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const phoneNumber = form.phoneNumber.value;
    const resume = form.resume.value;
    const coverLetter = form.textArea.value;
    const application = {
      name,
      jobId: _id,
      email : user.email,
      phoneNumber,
      resume,
      coverLetter
    };

    console.log(application)
    axios.post("http://localhost:3000/applications", application)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Application has been submitted",
            showCancelButton: false,
            timer: 1500,
          });
        }
        form.reset()
      });
  };

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
          <h2 className="text-2xl font-bold mb-6">Submit your application for the <br /><Link className="link text-blue-400" to={`/jobDetails/${_id}`}>{title}</Link></h2>
          <form onSubmit={handleApplicationsForm} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
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
                name="phoneNumber"
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
                name="resume"
                placeholder="Enter your Resume Link"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Cover Letter</span>
              </label>
              <textarea
                name="textArea"
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
