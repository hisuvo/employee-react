import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Login from "../components/Form/Login";
import Employees from "../Pages/Employees";
import Update from "../Pages/Update";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "employees",
        element: <Employees />,
        loader: () => fetch(`http://localhost:5000/employees`),
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/employees/${params.id}`),
      },
    ],
  },
]);

export default routes;
