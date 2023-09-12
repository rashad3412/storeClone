// eslint-disable-next-line no-unused-vars
import React from "react";
import GetallCategories from "../Products/GetAllCategories";
import GetallUsers from "../Login/GetAllUsers";
import AccountForm from "../Login/AccountForm";

const Home = () => {
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <GetallCategories />
        <GetallUsers />
        <AccountForm />
      </div>
    </>
  );
};

export default Home;
