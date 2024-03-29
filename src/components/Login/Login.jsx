// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

// /**
//  * LOG-IN USER
//  * @param {*} username
//  * @param {*} password
//  * @returns user object
//  */

const LoginUser = async (username, password) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error("Trouble Signing in");
  }
};

export default LoginUser;
