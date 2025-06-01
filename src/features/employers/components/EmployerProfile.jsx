import React, { use } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

const Applicate = ({myJobsPostedPromise}) => {
    const applicatons = use(myJobsPostedPromise)
    const {user}= use(AuthContext)
    return (
       <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex flex-col md:flex-row items-center gap-6">
  {/* Profile Image */}
  <img
    src={user.photoURL || "https://cdn.iconscout.com/icon/free/png-256/free-avatar-icon-download-in-svg-png-gif-file-formats--user-boy-avatars-flat-icons-pack-people-456322.png"}
    alt="User"
    className="w-20 h-20 rounded-full object-cover border-4 border-indigo-100"
  />

  {/* User Info */}
  <div className="flex-1 text-center md:text-left">
    <h2 className="text-2xl font-bold text-indigo-700">{user.name}</h2>
    <p className="text-gray-600">{user.email}</p>
    <p className="text-sm text-gray-500 mt-1">{user.role || "Job Seeker"}</p>
  </div>

  {/* Quick Stats */}
  <div className="grid grid-cols-2 gap-4 text-center">
    <div>
      <p className="text-sm text-gray-500">Total posted jobs</p>
      <p className="text-lg font-semibold text-indigo-700">
        {applicatons?.length || 0}
      </p>
    </div>
    <div>
      <p className="text-sm text-gray-500">Member Since</p>
      <p className="text-lg font-semibold text-indigo-700">
        {user.joined || "N/A"}
      </p>
    </div>
  </div>
</div>

    );
};

export default Applicate;