import React, { Component } from "react";

class Bookcard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="card mb-3">
        <div class="card-body">{this.props.title}</div>
      </div>
    );
  }
}

export default Bookcard;
