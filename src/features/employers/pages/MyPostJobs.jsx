import React, { use } from 'react';

const MyPostJobs = ({myJobsPostedPromise}) => {
    const myJobsData = use(myJobsPostedPromise);
    console.log(myJobsData)
    return (
        <div>
           all jobs 
        </div>
    );
};

export default MyPostJobs;