import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-info">
        <a class="navbar-brand" href="#">
          Google Books Search
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "text-light nav-link active"
                  : "text-light nav-link"
              }
            >
              Search
            </Link>
            <Link
              to="/saved"
              className={
                window.location.pathname === "/saved"
                  ? "text-light nav-link active"
                  : "text-light nav-link"
              }
            >
              Saved
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
