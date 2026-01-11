import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../Page/Home";
import AuthLayout from "../Page/AuthLayout";
import Register from "../Page/Register";
import Login from "../Page/Login";
import ToyDetails from "../Page/ToyDetailsPage";
import ToyDetailsPage from "../Page/ToyDetailsPage";
import PrivateRoute from "../Provider/PrivateRoute";
import Error from "../Page/Error";
import MyProfile from "../Page/MyProfile";
import Seller from "../Component/Seller";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/myprofile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/seller",
        element: <PrivateRoute>
          <Seller />
        </PrivateRoute>,
        loader: () => fetch("./data.json"),
      },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          {
            path: "/auth/register",
            element: <Register />,
          },
          {
            path: "/auth/login",
            element: <Login />,
          },
        ],
      },
    ],
  },
  {
    path: "/toydetails/:id",
    element: (
      <PrivateRoute>
        <ToyDetailsPage />
      </PrivateRoute>
    ),
    loader: () => fetch("/data.json"),
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);
