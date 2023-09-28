// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Nagvigates to single product on a new page
  function handleButtonClick() {
    navigate(`/products/`);
  }

  return (
    <header>
      <div className="img">
        <img
          src="https://media.sproutsocial.com/uploads/2021/11/21_Ecommerce-Trends.svg"
          width={"500px"}
          height={"300px"}
        ></img>
      </div>
      <div className="btn">
        <button className="btn3" onClick={handleButtonClick}>
          {" "}
          View Products
        </button>
      </div>
    </header>
  );
};

export default Home;
