import React, { Component } from "react";
import Navbar from "./Navbar";
import Titlebox from "./Titlebox";
import Searchbox from "./Searchbox";
import Resultbox from "./Resultbox";
import Savedbox from "./Savedbox";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSearchTerm: "Moon"
    };
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Titlebox />
          <Searchbox
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
          <Resultbox activeSearchTerm={this.state.activeSearchTerm} />
          <Savedbox />
        </div>
      </div>
    );
  }
}

export default Main;
