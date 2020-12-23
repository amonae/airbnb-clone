import styled from "styled-components";

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

export const LoginForm = styled.form`
  grid-column-start: 2;
  grid-column-end: 3;
  font-size: 3rem;
  padding: 20px;
`;

export const ColorBlock = styled.div`
  background-color: #ffeb3b;
  grid-column-start: 1;
  grid-column-end: 2;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 1rem;
  color: grey;
  margin-bottom: -1.5rem;
`;

export const InputField = styled.input`
  font-size: 1.3rem;
  background-color: lightgray;
  color: #000;
  border: none;
  border-radius: 3px;
  height: 30px;
`;
