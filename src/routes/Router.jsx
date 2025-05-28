import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../components/Home/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ApplyJob from "../features/jobs/ApplyJob";
import PrivateRoute from "../private/PrivateRoute";

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
           element: <PrivateRoute><ApplyJob></ApplyJob></PrivateRoute>,
        }
    ]
  },
]);

export default router;
