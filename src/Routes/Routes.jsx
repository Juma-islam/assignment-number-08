import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import AllAppCard from "../Pages/AllAppCard";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Pages/AppDetails";
import MyInstallationPage from "../Pages/MyInstallationPage";

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

    ]
  },

]);
export default router;