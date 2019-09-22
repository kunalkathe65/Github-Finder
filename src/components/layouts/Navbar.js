import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

const Navbar = ({ title, icon }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  //default props
  title: "Github Finder",
  icon: "fa fa-github"
};

Navbar.propTypes = {
  //typechecking props
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
export default Navbar;
