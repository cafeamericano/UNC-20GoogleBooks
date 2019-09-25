import React, { Component } from "react";
import Navbar from "./Navbar";
import Titlebox from "./Titlebox";
import Searchbox from "./Searchbox";
import Resultbox from "./Resultbox";
import Savedbox from "./Savedbox";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Titlebox />
          <Searchbox />
          <Resultbox />
          <Savedbox />
        </div>
      </div>
    );
  }
}

export default Main;
