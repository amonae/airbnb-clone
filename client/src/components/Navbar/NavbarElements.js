import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

export const Nav = styled.div`
  width: 100%;
  height: 80px;
  background: #fff;
  box-shadow: 1px 5px 3px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 9rem;
  z-index: 1000;
  position: sticky;
  top: 0;

  /* insert breakpoints here. change padding when you hit a certain breakpoint so the logo and profile icon wont be so far from sides */
`;

export const NavBrand = styled.div``;

export const Logo = styled.div`
  font-family: Poppins, 'sans-serif';
  font-size: 1.7em;
  font-weight: 700;
`;

export const NavMenu = styled.div``;

export const Buttons = styled.div`
  width: fit-content;
  height: fit-content;
`;

export const LoginBtn = styled.button`
  height: 45px;
  width: 125px;
  background: #38abfe;
  border: none;
  border-radius: 7px;
  font-family: Poppins, 'sans-serif';
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
`;

export const ProfileIcon = styled(FaUserCircle)`
  font-size: 2rem;
  color: grey;
  cursor: pointer;
`;
