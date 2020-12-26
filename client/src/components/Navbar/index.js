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
  return (
    <Nav>
      <NavBrand>
        <Logo>
          <span style={{ color: "#389ffe" }}>X</span>PLOR
        </Logo>
      </NavBrand>
      <NavMenu>
        <Buttons>
          <ProfileIcon />
        </Buttons>
      </NavMenu>
    </Nav>
  );
}
