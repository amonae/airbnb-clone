import "./styles.css";
import React, { useState, useEffect } from "react";
import {
  Link,
  Route,
  BrowserRouter as Router,
  useParams,
} from "react-router-dom";
import Hero from "./components/Hero/index.js";
import LoginPage from "components/Login";
import Signup from "components/Signup";

function Home() {
  return <Hero />;
}

function Login() {
  return <LoginPage />;
}

function SignupPage() {
  return <Signup />;
}

function UserPage() {
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState();
  const keys = data.map((obj) => Object.keys(obj));

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return <>{data && keys.map((key) => <p>{key}</p>)}</>;
}

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/users" component={UserPage} />
      <Route path="/signup" component={SignupPage} />
    </Router>
  );
}

export default App;
