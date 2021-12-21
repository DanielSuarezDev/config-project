import { Container, Text } from "./LogOut.styled";
import { useAuth } from "../../context/AuthContext/AuthContext";

export const LogOut = () => {
  const { logOut } = useAuth();
  return (
    <Container>
      <Text onClick={logOut}>Cerrar Sesion</Text>
    </Container>
  );
};
