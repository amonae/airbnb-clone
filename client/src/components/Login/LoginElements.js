import styled from 'styled-components';

export const LoginFormContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  font-size: 3rem;
  font-family: 'Arial', sans-serif;

  a {
    color: #949494;
    transition: color 0.3s;

    &:hover {
      text-decoration: none;
      color: #000;
      transition: color 0.3s;
    }
  }
`;

export const SignInSignUpContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Option = styled.a`
  font-size: 2.4rem;
  text-decoration: none;
  font-weight: 900;
  word-spacing: -0.3rem;
  cursor: pointer;

  &.active {
    color: #252525;
    /* border-bottom: 4px solid black; */
  }
`;

export const SignInOption = styled(Option)`
  margin-right: 1rem;
`;

export const SignUpOption = styled(Option)``;

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
  border: 1px solid rgba(0, 0, 0, 0.1);
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
  background-color: #0a0adb;
  padding: 10px 30px;
  font-family: 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
`;
