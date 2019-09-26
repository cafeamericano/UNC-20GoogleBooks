import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav class="navbar navbar-dark bg-primary">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <Link to="/" className={window.location.pathname === "/" ? "text-light nav-link active" : "text-light nav-link"}>
          Search
        </Link>
        <Link to="/saved" className={window.location.pathname === "/saved" ? "text-light nav-link active" : "text-light nav-link"}>
          Saved
        </Link>
      </nav>
    );
  }
}

export default Navbar;
