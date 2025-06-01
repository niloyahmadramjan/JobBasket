import React, { Suspense, use } from "react";
import MyPostJobs from "./MyPostJobs";
import EmployerProfile from "../components/EmployerProfile";
import { AuthContext } from "../../../contexts/AuthContext";
import { myJobsPostedPromise } from "../../auth/services/employerJobsAPI";

const PostedJobs = () => {
  const { user } = use(AuthContext);

  return (
    <div>
      <Suspense fallback="Loading..">
        <EmployerProfile
          myJobsPostedPromise={myJobsPostedPromise(user.email)}
        ></EmployerProfile>
        <MyPostJobs  myJobsPostedPromise={myJobsPostedPromise(user.email)}></MyPostJobs>
      </Suspense>
    </div>
  );
};

export default PostedJobs;
