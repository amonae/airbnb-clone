import styled from "styled-components";
import {NavLink} from 'react-router-dom';

// export const LoginContainer = styled.div`
//   background: url(${loginBg});
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   height: 100vh;
//   filter: blur(3px);
//   position: relative;
// `

export const LoginContainer = styled.div`
  background-color: #e0e0e0;
  width: 100vw;
  height: 100vh;
  font-family: 'Arial', sans-serif;
`;

export const LoginBox = styled.div`
  background-color: white;
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 800px;
  height: 550px;
  top: 15vh;
  left: 25vw;
  margin: 0 auto;
  border: none;
  border-radius: 4px;
  -webkit-box-shadow: 9px 5px 18px 0px rgba(50, 50, 50, 0.28);
  -moz-box-shadow: 9px 5px 18px 0px rgba(50, 50, 50, 0.28);
  box-shadow: 9px 5px 18px 0px rgba(50, 50, 50, 0.28);
  /* outline: 1px solid red; */
`;

export const LoginFormContainer = styled.div`
  
  grid-column-start: 2;
  grid-column-end: 3;
  font-size: 3rem;
  padding: 6rem 4rem;
`;

export const SignInSignUpContainer = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 2rem;
`

export const Option = styled(NavLink)`
  font-size: 2rem;
  text-decoration: none;
  font-weight: 900;
  word-spacing: -0.3rem;
  cursor: pointer;
  color: #CCCCCC;
  
  &.selected {
  color: #000;
  border-bottom: 4px solid black;
  }
  
`

export const SignInOption = styled(Option)`
  margin-right: 1rem;
`

export const SignUpOption = styled(Option)`
`

export const ColorBlock = styled.div`
  background-color: #ffeb3b;
  grid-column-start: 1;
  grid-column-end: 2;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 1rem;
  color: grey;
  margin-bottom: -1rem;
`;

export const InputField = styled.input`
  width: 100%;
  font-size: 1.3rem;
  background-color: #f7f7f7;
  color: #000;
  border: none;
  border-radius: 5px;
  height: 40px;
  margin-bottom: 1rem;
  padding: 0 1rem;
`;

export const LoginButton = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  color: #fff;
  border: none;
  border-radius: 5px;
  background-color: #0A0ADB;
  padding: 10px 30px;
  font-family: 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
`
