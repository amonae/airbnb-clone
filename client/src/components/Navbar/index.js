import React from "react";
import {
  Nav,
  Logo,
  Buttons,
  LoginBtn,
  SignupBtn,
  NavMenu,
  NavBrand,
  ProfileIcon
} from "components/Navbar/NavbarElements";


export function Navbar() {
  const style = {
    position: "absolute",
    background: "transparent",
    boxShadow: "none",
  };
  return (
    <Nav style={style}>
      <NavBrand>
        <Logo>
          <span style={{ color: "#389ffe" }}>X</span>PLOR
        </Logo>
      </NavBrand>
      <NavMenu>
        <Buttons>
          <LoginBtn>Login</LoginBtn>
          <SignupBtn>Sign Up</SignupBtn>
          <ProfileIcon />
        </Buttons>
      </NavMenu>
    </Nav>
  );
}
