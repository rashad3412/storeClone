// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import LoginUser from "./Login";
import GetallUsers from "./GetAllUsers";

const AccountForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const auth = LoginUser;

    const data = await auth(username, password);
    console.log(data);
    try {
      if (data) {
        return "Success";
      } else {
        return "Failed";
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h1>Login Page</h1>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          placeholder=""
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          value={password}
          placeholder=""
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <button type="submit">submit</button>
      <GetallUsers />
    </form>
  );
};

export default AccountForm;
