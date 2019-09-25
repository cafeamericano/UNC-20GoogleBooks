import React, { Component } from "react";
import Navbar from "./Navbar";
import Titlebox from "./Titlebox";
import Searchbox from "./Searchbox";
import Resultbox from "./Resultbox";
import Savedbox from "./Savedbox";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state= {
      activeSearchTerm: 'Moon'
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Titlebox />
          <Searchbox />
          <Resultbox activeSearchTerm={this.state.activeSearchTerm}/>
          <Savedbox />
        </div>
      </div>
    );
  }
}

export default Main;
