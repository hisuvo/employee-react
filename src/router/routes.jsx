import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Login from "../components/Form/Upload";
import Employees from "../Pages/Employees";
import Update from "../Pages/Update";
import Upload from "../components/Form/Upload";
import SignIn from "../components/Form/SignIn";
import SingUp from "../components/Form/SingUp";
import User from "../Pages/User";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/upload",
        element: <Upload />,
      },
      {
        path: "employees",
        element: <Employees />,
        loader: () =>
          fetch(`https://employee-server-eight.vercel.app/employees`),
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(
            `https://employee-server-eight.vercel.app/employees/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SingUp />,
      },
      {
        path: "/users",
        element: <User />,
        loader: () =>
          fetch(`https://employee-server-eight.vercel.app/employeesauth`),
      },
    ],
  },
]);

export default routes;
