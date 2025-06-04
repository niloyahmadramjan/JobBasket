import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../components/Home/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ApplyJob from "../features/jobs/ApplyJob";
import PrivateRoute from "../private/PrivateRoute";
import JobDetails from "../features/jobs/JobDetails";
import Profile from "../pages/Profile";
import AppliedJobs from "../features/jobs/AppliedJobs";
import JobPost from "../features/employers/pages/JobPost";
import PostedJobs from "../features/employers/pages/PostedJobs";
import ViewApplications from "../features/employers/pages/ViewApplications";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/applyJob/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
        hydrateFallbackElement: <span>Loading..</span>,
        element: (
          <PrivateRoute>
            <ApplyJob></ApplyJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/jobDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
        element: <JobDetails></JobDetails>,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/appliedJobs",
        element: (
          <PrivateRoute>
            <AppliedJobs></AppliedJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/findajob",
        element: <p>Find a job page not cooke yet</p>,
      },
      {
        path: "/recruiters",
        element: <p>Recruiters page not cooke yet</p>,
      },
      {
        path: "/candidates",
        element: <p>Candidates page not cooke yet</p>,
      },
      {
        path: "/blog",
        element: <p>b Blog page not cooke yet</p>,
      },
      {
        path: "/contact",
        element: <p>Contact page not cooke yet</p>,
      },
      {
        path: "/jobPost",
        element: (
          <PrivateRoute>
            <JobPost></JobPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/postedJobs",
        element: (
          <PrivateRoute>
            <PostedJobs></PostedJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/viewApplications/:job_id",
        Component: ViewApplications,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/viewApplications/${params.job_id}`),
        hydrateFallbackElement: <span>Loading..</span>,
      },
    ],
  },
]);

export default router;
