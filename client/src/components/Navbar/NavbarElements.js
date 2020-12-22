import styled from "styled-components";

export const Nav = styled.div`
  width: 100%;
  height: 80px;
  /* padding: 0 3rem; */
  background: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4.8rem;
  /* outline: 1px solid red; */
`;

export const Logo = styled.div`
  font-family: Poppins, "sans-serif";
  font-size: 2em;
  font-weight: 700;
`;

export const Buttons = styled.div`
  /* outline: 1px solid red; */
  width: fit-content;
  height: fit-content;
`;
export const LoginBtn = styled.button`
  height: 45px;
  width: 125px;
  background: #38abfe;
  border: none;
  border-radius: 7px;
  font-family: Poppins, "sans-serif";
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
`;

export const SignupBtn = styled(LoginBtn)`
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.12);
  margin-left: 1.75rem;
  color: #000;
`;
