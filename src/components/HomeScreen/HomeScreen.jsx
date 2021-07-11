import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const HomeScreen = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>HomeScreen</h1>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
};
