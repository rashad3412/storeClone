// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
const GetallUsers = () => {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    // Fetching All product categories.
    const userContainer = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/users`);
        const data = await response.json();
        console.log("Users: ", data);
        setUsers(data);
      } catch (error) {
        console.error("Trouble getting users");
      }
    };
    userContainer();
  }, []);
  return (
    <>
      <div>
        <div key={user.id}>
          {user.map((user) => {
            user.name;
          })}
        </div>
      </div>
    </>
  );
};

export default GetallUsers;
