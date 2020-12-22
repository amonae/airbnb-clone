import React from "react";
import {
  Nav,
  Logo,
  Buttons,
  LoginBtn,
  SignupBtn,
} from "components/Navbar/NavbarElements";

export function Navbar() {
  const style = {
    position: "absolute",
    background: "transparent",
    boxShadow: "none",
  };
  return (
    <Nav style={style}>
      <Logo>
        <span style={{ color: "#389ffe" }}>X</span>PLOR
      </Logo>
      <Buttons>
        <LoginBtn>Login</LoginBtn>
        <SignupBtn>Sign Up</SignupBtn>
      </Buttons>
    </Nav>
  );
}
