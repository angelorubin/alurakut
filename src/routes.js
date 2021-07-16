import { useRoutes } from "react-router-dom";
import Dashboard from "./features/dashboard";
import SignIn from "./features/signin";
import SignUp from "./features/signup";
import User from "./features/user";
import Home from "./features/home";
import PageNotFound from "shared/components/page-not-found";

export const Routes = () => {
	const routes = useRoutes([
		{
			path: "*",
			element: <PageNotFound />,
		},
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/signin",
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
					path: "/user",
					element: <User />,
				},
			],
		},
	]);
	return routes;
};
