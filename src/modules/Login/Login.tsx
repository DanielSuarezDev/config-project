import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { Layout } from "../../templates/Layout/Layout";
import { LoginContainer, Title } from "./Login.styled";

export const Login = () => {
  const navigate = useNavigate();
  const { googleSignIn, userConfig } = useAuth();

  useEffect(() => {
    if (userConfig) {
      navigate("/", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }, [userConfig]);
  return (
    <Layout>
      <Title>Login</Title>
      <LoginContainer onClick={googleSignIn}>Login con Google</LoginContainer>
    </Layout>
  );
};
