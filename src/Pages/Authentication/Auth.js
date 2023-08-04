import React from "react";
import Login from "./Login";
import Register from "./Register";
import "./auth.css"

export default function Auth() {
  return (
    <div className="background">
      <Login />
      <h1>Blog-website</h1>
      <Register />
    </div>
  );
}
