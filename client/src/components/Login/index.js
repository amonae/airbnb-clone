import React from "react";
import {
  LoginBox,
  LoginContainer,
  LoginForm,
  ColorBlock,
  InputField,
  InputLabel,
} from "components/Login/LoginElements";

export default function LoginPage() {
  return (
    <>
      <LoginContainer>
        <LoginBox>
          <ColorBlock />
          <LoginForm action="http://localhost:5000/auth/login" method="post">
            <InputLabel htmlFor="email">Email</InputLabel>
            <InputField type="text" name="email" id="email" />
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputField type="password" name="password" id="password" />
            <input type="submit" id="submit" value="Submit" />
          </LoginForm>
        </LoginBox>
      </LoginContainer>
    </>
  );
}
