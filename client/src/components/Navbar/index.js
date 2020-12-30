import React from 'react';
import {
  Nav,
  Logo,
  Buttons,
  LoginBtn,
  SignupBtn,
  NavMenu,
  NavBrand,
  ProfileIcon,
  ProfileIconContainer,
  Popup as Popover
} from 'components/Navbar/NavbarElements';
// import PopupMenu from './PopupMenu';

export function Navbar() {
  return (
    <Nav>
      <NavBrand>
        <Logo>
          <span style={{ color: '#389ffe' }}>X</span>PLOR
        </Logo>
      </NavBrand>
      <NavMenu>
        <Buttons>
          <ProfileIconContainer
            trigger="click"
            placement="bottom-end"
            overlay={
              <Popover id="popover-basic">
                <Popover.Title as="h3">Popover right</Popover.Title>
                <Popover.Content>
                  And here's some <strong>amazing</strong> content. It's very
                  engaging. right?
                </Popover.Content>
              </Popover>
            }
          >
            <ProfileIcon />
          </ProfileIconContainer>
        </Buttons>
      </NavMenu>
    </Nav>
  );
}
