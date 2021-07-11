import React from "react";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { RouterApp } from "./RouterApp";

describe("RouterApp", () => {
  const setUser = jest.fn();
  const user = {
    id: 123,
    name: "LUcas",
    email: "LUCAS@GMAIL.COM",
  };
  const wrapper = mount(
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <RouterApp />
      </Router>
    </UserContext.Provider>
  );
  test("should match snapshoot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
