// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import LoginUser from "./Login";

const AccountForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const AuthUser = LoginUser;

    const data = await AuthUser(username, password);
    console.log(data);
    if (data) {
      return "Success";
    } else {
      return "Failed";
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          placeholder=""
          onChange={(event) => setUsername(event.target.vaule)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          value={password || ""}
          placeholder=""
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default AccountForm;
