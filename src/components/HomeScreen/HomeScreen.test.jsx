import React from "react";
import { mount } from "enzyme";
import { HomeScreen } from "./HomeScreen";
import { UserContext } from "../../context/UserContext";

describe("HomeScreen", () => {
  const user = {
    name: "Lucas",
    email: "lucas@gmail.com",
  };
  const wrapper = mount(
    <UserContext.Provider
      value={{
        user,
      }}
    >
      <HomeScreen />
    </UserContext.Provider>
  );
  test("should match snapshoot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
