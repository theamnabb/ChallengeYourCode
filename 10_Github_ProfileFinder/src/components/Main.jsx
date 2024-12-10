import React, { useState, useEffect } from "react";
import Card from "./Card";
import Input from "./Input";

const Main = () => {
  const [username, setUsername] = useState(""); // username (to store the input value)
  const [userData, setUserData] = useState(null); // userData (to store the fetched data)

  // Default username (e.g., AaMna AnSari's GitHub profile)
  const defaultUsername = "aamna-ansari";

  // 📍 FETCH DATA 📍
  const fetchData = async (user = username || defaultUsername) => {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const data = await response.json();
      setUserData(data); // Set user data
    } catch (error) {
      console.log("User Not Found");
    }
  };

  // Automatically fetch data for the default user on initial render
  useEffect(() => {
    fetchData(defaultUsername);
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchData();
    }
  };

  return (
    <>
      <main className="p-4">
        <Input username={username} setUsername={setUsername} fetchData={fetchData} handleKeyPress={handleKeyPress} />
        {userData && <Card data={userData} />} {/* Display data only if fetched */}
      </main>
    </>
  );
};

export default Main;
