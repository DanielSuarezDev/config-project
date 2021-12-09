import { FC, Suspense } from "react";
import { useRoutes } from "react-router";
import { routes } from "./routes";

export const Routes: FC = () => {
  const element = useRoutes(routes);

  return <Suspense fallback={<p>loading...</p>}>{element}</Suspense>;
};
