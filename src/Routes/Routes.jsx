import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import AllAppCard from "../Pages/AllAppCard";

const router = createBrowserRouter([
     {
    path: "/",
    element: <MainLayouts/>,
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

    ]
  },

]);
export default router;