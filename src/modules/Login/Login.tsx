import { useAuthentication } from "./hooks/useAuthentication";

export const Login = () => {
  const { startGoogleLogin } = useAuthentication();
  return <button onClick={startGoogleLogin}>login Google</button>;
};
