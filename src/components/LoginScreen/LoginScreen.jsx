import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const handleOnclick = () => {
    const newUSer = {
      id: 1234,
      name: "lucas",
      email: "lucasospina@gmail.com",
    };
    setUser(newUSer);
  };
  console.log(user);
  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleOnclick}>
        Login
      </button>
    </div>
  );
};
