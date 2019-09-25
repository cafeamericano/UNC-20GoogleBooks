import React, { Component } from "react";

class Titlebox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container text-center">
          <h4 class="display-4">(React) Google Books Search</h4>
          <p class="lead">
            Search for and Save Books of Interest
          </p>
        </div>
      </div>
    );
  }
}

export default Titlebox;
