import React from "react";
import { LoginBox, LoginContainer } from "components/Login/LoginElements";

export default function LoginPage() {
  return (
    <>
      <LoginContainer>
        <LoginBox>
          <form action="http://localhost:5000/auth/login" method="post">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <input type="submit" id="submit" value="Submit" />
          </form>
        </LoginBox>
      </LoginContainer>
    </>
  );
}
