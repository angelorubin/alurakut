import { useRoutes } from "react-router-dom";
import Dashboard from "./features/dashboard";
import SignIn from "./features/signin";
import SignUp from "./features/signup";

export const App = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "messages",
          element: <h1>Messages</h1>,
        },
      ],
    },
  ]);
  return routes;
};
