import React from "react";
import { mount } from "enzyme";
import { UserContext } from "../../context/UserContext";
import { LoginScreen } from "./LoginScreen";

describe("LoginScreen", () => {
  const setUser = jest.fn();
  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );
  test("should match snapshoot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should exec setUser with the argument", () => {
    wrapper.find("button").prop("onClick")();

    expect(setUser).toHaveBeenCalledWith({
      id: 1234,
      name: "lucas",
      email: "lucasospina@gmail.com",
    });
  });
});
