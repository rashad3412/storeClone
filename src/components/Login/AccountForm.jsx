// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import LoginUser from "./Login";
import GetallUsers from "./GetAllUsers";
import { useNavigate } from "react-router-dom";

const AccountForm = ({ token, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const auth = LoginUser;

    const data = await auth(username, password);
    console.log("data", data);
    setToken(data.token);
    if (data.token) {
      navigate("/profile");
    }
  };

  return (
    <div className="auth-form">
      <div className="login_inputs">
        <form className="center-button" onSubmit={onSubmitHandler}>
          <h1>Login Page</h1>
          <div>
            <input
              type="text"
              value={username}
              placeholder="username"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <div className="center-button">
              <small> this is error placeholder</small>
              <button className="format-button">Login</button>
            </div>
          </div>
          <GetallUsers />
        </form>
      </div>
    </div>
  );
};

export default AccountForm;
