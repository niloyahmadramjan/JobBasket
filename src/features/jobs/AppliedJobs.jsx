import React, { Suspense, use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Applicate from "./Applicate";
import MyApplications from "./MyApplications";
import { myApplicationPromise } from "../../services/ApplicaitonApi";

const AppliedJobs = () => {
    const { user } = use(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-12 px-4 md:px-8">
      <Suspense fallback={'laoding...'}>
        <Applicate myApplicationPromise={myApplicationPromise(user.email)}></Applicate>
      </Suspense>
      <Suspense fallback={'laoding...'}>
        <MyApplications myApplicationPromise={myApplicationPromise(user.email)}></MyApplications>
      </Suspense>
    </div>
  );
};

export default AppliedJobs;
