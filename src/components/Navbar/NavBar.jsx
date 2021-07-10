import React from "react";
import { Link, NavLink } from "react-router-dom";
/**
 * NAVLINK is use for the activeClassName,
 * this is functional because we could use
 * some interactive class here.
 *
 */
export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        ReactRouter
      </Link>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            exact
            to="/"
            className="nav-item nav-link"
          >
            Home
          </NavLink>
          <NavLink
            activeClassName="active"
            exact
            to="/about"
            className="nav-item nav-link"
          >
            About
          </NavLink>
          <NavLink
            activeClassName="active"
            exact
            to="/login"
            className="nav-item nav-link"
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
