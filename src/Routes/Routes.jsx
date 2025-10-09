import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import AllAppCard from "../Pages/AllAppCard";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Pages/AppDetails";
import MyInstallationPage from "../Pages/MyInstallationPage";
import GithubProfile from "../Pages/GithubProfile";
import GooglePlay from "../Pages/GooglePlay";
import AppStore from "../Pages/AppStore";
import ErrorDetailsPage from "../Pages/ErrorDetailsPage";

const router = createBrowserRouter([
     {
    path: "/",
    element: <MainLayouts/>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>loading...</p>,
    children: [
          {
    index: true,
    element: <Home></Home>,

  },
  {
    path: '/all-apps',
    element: <AllAppCard></AllAppCard>,
  },

   {
    path: '/app/:id',
    element: <AppDetails/>,
  },

{
    path: '/myInstallation',
    element: <MyInstallationPage/>,
  },

  {
    path: '/github',
    element: <GithubProfile/>,
  },

   {
    path: "/google-play",
    element: <GooglePlay/>,
  },

   {
    path: "/app-store",
    element: <AppStore/>,
  },

 {
     path: "/error-details",
    element: <ErrorDetailsPage/>,
  },

    ]
  },

]);
export default router;