import { lazy } from "react";

const Dashboard = lazy(() => import("./views/App/Dashboard"));

const routes = [
  { path: "/dashboard", exact: true, name: "Dashboard", Component: Dashboard },
];

export default routes;
