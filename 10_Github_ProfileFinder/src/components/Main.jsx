import React, { useState, useEffect } from "react";
import Card from "./Card";
import Input from "./Input";

const Main = () => {
  const [username, setUsername] = useState(""); // username (to store the input value).
  const [userData, setUserData] = useState(null); // userData (to store the fetched data)

  // 📍 FETCH DATA 📍

  const fetchData = async () => {
    try {
      const respone = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = respone.json();
      setUserData(data);
    } catch (error) {
      console.log("User Not Found");
    }
  };

  useEffect(() => {
    if (username) {
      fetchData();
    }
  }, [username]);

  return (
    <>
      <main className="p-4">
        <Input username={username} setUsername={setUsername} fetchData={fetchData} />
        <Card />
      </main>
    </>
  );
};

export default Main;
