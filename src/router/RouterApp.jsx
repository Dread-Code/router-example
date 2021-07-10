import React from "react";
import { AboutScreen } from "../components/AboutScreen/AboutScreen";
import { HomeScreen } from "../components/HomeScreen/HomeScreen";
import { LoginScreen } from "../components/LoginScreen/LoginScreen";
import { Switch, Route } from "react-router-dom";

export const RouterApp = () => {
  return (
    <div>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about" component={AboutScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/" component={HomeScreen} />
      </Switch>
    </div>
  );
};
