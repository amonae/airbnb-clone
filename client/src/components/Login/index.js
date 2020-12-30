import React, { useState, useEffect } from 'react';
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
} from 'components/Login/LoginElements';

export default function LoginPage(props) {
  const [switchTo, setSwitchTo] = useState('login');
  const [isLoginActive, setIsLoginActive] = useState(true);

  function handleClick(linkName) {
    setSwitchTo(linkName);
    if (linkName === 'login') {
      setIsLoginActive(true);
    }
    if (linkName === 'signup') {
      setIsLoginActive(false);
    }
  }

  return (
    <>
      <LoginFormContainer>
        <SignInSignUpContainer>
          <SignInOption
            href="#login"
            className={isLoginActive && 'active'}
            onClick={() => handleClick('login')}
          >
            Login
          </SignInOption>
          <SignUpOption
            href="#register"
            className={!isLoginActive && 'active'}
            onClick={() => handleClick('signup')}
          >
            Sign up
          </SignUpOption>
        </SignInSignUpContainer>
        {switchTo === 'login' ? (
          <form action="http://localhost:5000/auth/login" method="post">
            <InputLabel htmlFor="email">Email</InputLabel>
            <InputField type="text" name="email" id="email" />
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputField type="password" name="password" id="password" />
            <LoginButton
              type="submit"
              id="submit"
              value="Login"
              onClick={props.handleClose}
            />
          </form>
        ) : (
          <p>This is the signup form</p>
        )}
      </LoginFormContainer>
    </>
  );
}
