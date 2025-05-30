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
            path: '/register',
            Component: Register
        },
        {
            path: '/login',
            Component: Login
        },
        {
            path: '/applyJob/:id',
            loader: ({params})=> fetch(`http://localhost:3000/jobs/${params.id}`),
            hydrateFallbackElement: <span>Loading..</span>,
           element: <PrivateRoute><ApplyJob></ApplyJob></PrivateRoute>,
        },
        {
            path: '/jobDetails/:id',
             loader: ({params})=> fetch(`http://localhost:3000/jobs/${params.id}`),
           element: <JobDetails></JobDetails>,
        },
        {
            path: "/profile",
            Component: Profile,
        },
        {
            path: '/appliedJobs',
            Component: AppliedJobs,
        }
    ]
  },
]);

export default router;
