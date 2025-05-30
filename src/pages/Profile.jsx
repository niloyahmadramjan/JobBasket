import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white py-12 px-4 md:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
        {/* Profile Header */}
        <div className="mb-6 text-center flex flex-col items-center">
          <img
            src={user.photoURL || "https://i.ibb.co/2nF8YkF/default-avatar.png"} // fallback avatar
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-indigo-200 mb-4"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-700">
            {user.name}
          </h2>
          <p className="text-gray-600">{user.email}</p>
          {user.location && (
            <p className="text-gray-500 mt-1">{user.location}</p>
          )}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-indigo-50 rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Jobs Applied</p>
            <h3 className="text-xl font-semibold text-indigo-700">
              {user.jobsApplied}
            </h3>
          </div>

          <div className="bg-indigo-50 rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Last Login</p>
            <h3 className="text-xl font-semibold text-indigo-700">
              {user.lastLogin}
            </h3>
          </div>

          <div className="bg-indigo-50 rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Member Since</p>
            <h3 className="text-xl font-semibold text-indigo-700">
              {user.joined || "N/A"}
            </h3>
          </div>

          <div className="bg-indigo-50 rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Role</p>
            <h3 className="text-xl font-semibold text-indigo-700">
              {user.role || "Job Seeker"}
            </h3>
          </div>
        </div>

        {/* Optional Bio */}
        {user.bio && (
          <div className="mt-6 bg-gray-50 rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">About</p>
            <p className="text-gray-700">{user.bio}</p>
          </div>
        )}

        <div className="bg-indigo-50 rounded-lg p-4 shadow-sm flex justify-between items-center">
          <p className="text-sm text-gray-500">Total Applied : 00</p>
          <Link to="/appliedJobs" className="  btn btn-primary">See All Applied Jobs</Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
