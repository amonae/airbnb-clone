import styled from "styled-components";
import { LoginBtn } from "components/Navbar/NavbarElements";

export const Searchbox = styled.div`
  background: white;
  width: 876px;
  height: 82px;
  margin-top: 2rem;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  font-size: 1.5rem;
  font-weight: 400;
  font-family: Roboto, "sans-serif";
  border: none;
  position: absolute;
  left: 8rem;
  /* outline: 1px solid red; */
`;

export const SearchBtn = styled(LoginBtn)`
  font-family: Roboto, "sans-serif";
  font-size: 30px;
  font-weight: 500;
  border: none;
  height: 68px;
  width: 226px;
  background: #389ffe;
  border-radius: 5px;
  position: absolute;
  right: 6px;
`;
