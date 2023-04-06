import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PropTypes from "prop-types";

const Navbar = (props) => {
  const [click, setclick] = useState(0);

  const EnableDarkMode = () => {
    console.log(click);
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
    Array.from(document.getElementsByClassName("form-control")).forEach(
      (element) => {
        element.classList.toggle("text-white");
        element.classList.toggle("bg-dark");
      }
    );
    if (click % 2 !== 0) {
      document.getElementsByClassName("navbar")[0].dataset.bsTheme = "";
    } else {
      document.getElementsByClassName("navbar")[0].dataset.bsTheme = "dark";
    }
    setclick(click + 1);
    props.showAlert("Dark mode is enabled", "success");
  };
  return (
    <nav
      data-bs-theme="White"
      className="navbar navbar-expand-lg bg-body-tertiary"
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          {props.title}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <input
            type="checkbox"
            className="btn-check "
            id="btn-check-outlined"
            autoComplete="off"
          />
          <label
            className="btn btn-outline-primary btn-outline-dark mx-4"
            htmlFor="btn-check-outlined"
            onClick={EnableDarkMode}
          >
            Dark Mode
          </label>
          <br></br>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired, // is required is known in the word
}; // to check the validate the type of variable given to prop

//* Default props
Navbar.defaultProps = {
  // these value are used when we doen't pass any value/props
  title: "Set Title Here",
};

export default Navbar;
