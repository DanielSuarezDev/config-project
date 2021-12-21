import { useState } from "react";

import { LogOut } from "../LogOut/LogOut";
import { HeaderContainer, Title, Avatar } from "./Header.styled";
import { useAuth } from "../../context/AuthContext/AuthContext";

export const Header = () => {
  const { userConfig } = useAuth();
  const { displayName, photoURL } = userConfig || {};
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal && <LogOut />}
      <HeaderContainer>
        <Title>Hola 👋🏼 {displayName}</Title>
        <Avatar src={photoURL} alt="photo" onClick={handleModal} />
      </HeaderContainer>
    </>
  );
};
