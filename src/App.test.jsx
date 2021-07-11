import React from "react";
import { mount } from "enzyme";
import App from "./App";

describe("RouterApp", () => {
  const wrapper = mount(<App />);
  test("should match snapshoot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
