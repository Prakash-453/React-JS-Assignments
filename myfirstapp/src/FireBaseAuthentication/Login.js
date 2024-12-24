import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const route = useNavigate("") 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email,password)
    route("/")
    setEmail("")
    setPassword("")
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter Email Here" onChange={(e) => setEmail(e.target.value)}value={email}/>
        <input type="password" placeholder="Enter Password Here" onChange={(e) => setPassword(e.target.value)}value={password}/>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
