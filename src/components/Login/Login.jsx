// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

/**
 * LOG-IN USER
 * @param {*} username
 * @param {*} password
 * @returns user object
 */

const LoginUser = async (username, password) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();
    return "result", result;
  } catch (err) {
    console.error(err);
  }
};

export default LoginUser;
