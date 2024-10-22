import React from "react";
import { createBrowserRouter } from "react-router-dom";
import {
  About,
  AddJob,
  Admin,
  AllJobs,
  DashboardLayout,
  EditJob,
  Error,
  Home,
  HomeLayout,
  Login,
  Profile,
  Register,
  Stats,
  VerifyEmail,
} from "./pages";

///**Actions React router dom *///

import { registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { addjobAction } from "./pages/AddJob";
import { editJobAction } from "./pages/EditJob";
import { actionProfile } from "./pages/Profile";
//**Loaders */
import { loaderUser } from "./pages/DashboardLayout";
import { verificationLoader } from "./pages/VerifyEmail";
import { allJobsLoader } from "./pages/AllJobs";
import { loaderEditJob } from "./pages/EditJob";
import { loaderAdmin } from "./pages/Admin";
import { statsLoader } from "./pages/Stats";
//**Loaders end */
const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    loader: loaderUser,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AddJob />,
        action: addjobAction,
      },
      {
        path: "all-jobs",
        element: <AllJobs />,
        loader: allJobsLoader,
      },
      {
        path: "stats",
        element: <Stats />,
        loader: statsLoader,
      },
      {
        path: "edit-job/:id",
        element: <EditJob />,
        action: editJobAction,
        loader: loaderEditJob,
      },
      {
        path: "admin",
        element: <Admin />,
        loader: loaderAdmin,
      },
      {
        path: "profile",
        element: <Profile />,
        action: actionProfile,
      },
    ],
  },
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "verify-email",
        element: <VerifyEmail />,
        loader: verificationLoader,
      },
    ],
  },
]);

export default router;
