import React, { Component } from "react";
import Navbar from "./Navbar";
import Titlebox from "./Titlebox";
import Searchbox from "./Searchbox";
import Resultbox from "./Resultbox";
import Savedbox from "./Savedbox";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSearchTerm: "",
      keywords: ""
    };
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ activeSearchTerm: this.state.keywords });
    setTimeout( () => this.setState({keywords: ""}), 1)
  };

  render() {
    return (
      <Router>
        <Navbar />
        <div className="container">
          <Titlebox />
          <Route exact path="/saved" component={Savedbox} />
          <Route exact path="/" className="container">
            <Searchbox
              value={this.state.keywords}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
            <Resultbox activeSearchTerm={this.state.activeSearchTerm} />
          </Route>
        </div>
      </Router>
    );
  }
}

export default Main;
