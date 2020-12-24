import React, {useState, useEffect} from "react";
import {
  LoginBox,
  LoginContainer,
  LoginFormContainer,
  ColorBlock,
  InputField,
  InputLabel,
  LoginButton,
  SignInSignUpContainer,
  SignInOption,
  SignUpOption
} from "components/Login/LoginElements";

export default function LoginPage() {
  const [switchTo, setSwitchTo] = useState('login');


  return (
    <>
      <LoginContainer>
        <LoginBox>
          <ColorBlock />
          <LoginFormContainer>
            <SignInSignUpContainer>
              <SignInOption onClick={() => setSwitchTo('login')} to={{
                pathname: 'login/#login'
              }}
              activeClassName="active">Log in</SignInOption>
              <SignUpOption onClick={() => setSwitchTo('signup')} to={{
                pathname: 'login/#signup'
              }}
              activeClassName="active">Sign up</SignUpOption>
            </SignInSignUpContainer>
            {
              switchTo === "login" ?
              <form action="http://localhost:5000/auth/login" method="post">
            <InputLabel htmlFor="email">Email</InputLabel>
            <InputField type="text" name="email" id="email" />
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputField type="password" name="password" id="password" />
            <LoginButton type="submit" id="submit" value="Login" />
          </form> :
            <p>This is the signup form</p> 
            }
          
          </LoginFormContainer>
        </LoginBox>
      </LoginContainer>
    </>
  );
}
