import React from "react";

export default function Signup() {
  return (
    <form action="http://localhost:5000/auth/signup" method="post">
      <div>
        <label>Email:</label>
        <input type="text" name="email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" />
      </div>
      <div>
        <input type="submit" value="Sign Up" />
      </div>
    </form>
  );
}
