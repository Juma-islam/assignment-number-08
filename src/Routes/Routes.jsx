import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";

const router = createBrowserRouter([
     {
    path: "/",
    element: <MainLayouts/>,
    children: [
          {
    index: true,
    element: <Home></Home>,
    loader: ()=> fetch('../data.json')
  },

    ]
  },

]);
export default router;