import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/api/auth/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            username: email,
            password: password,
          }),
        }
      );

      const data = await response.json();
      console.log("LOGIN RESPONSE:", data);
      console.log("STATUS:", response.status);

      if (response.ok) {
        // store token
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        // redirect
        navigate("/dashboard");

      } else {
        setError("Invalid login");
      }

    } catch (err) {
      console.log(err);
      setError("Server error");
    }
  };


  return (
    <div className="container mt-5">

      <h1>Login Page</h1>
      <p>Welcome to the login page!</p>

      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Email address</label>
          <input type="text" className="form-control" placeholder="Enter email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="form-group mt-3">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>


        <button type="submit" className="btn btn-primary mt-3">Login</button>

      </form>

    </div>
  );
};

export default Login;