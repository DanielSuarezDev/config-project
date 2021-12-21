import { Container, Content } from "./Layout.styled";

export const Layout = ({ children }: any) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};
