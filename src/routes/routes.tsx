import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { ROUTES } from "./types";

const Login = lazy(() => import("../modules/Login"));
const Home = lazy(() => import("../modules/Home"));

export const routes: RouteObject[] = [
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
];
