import React, { Component } from "react";

class Bookcard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="card mb-3">
        <div class="card-body">
          <div>{this.props.data.title}</div>
          <img src={this.props.data.image} />
          <div>{this.props.data.description}</div>
          <a href={this.props.data.link}>Read more.</a>
        </div>
      </div>
    );
  }
}

export default Bookcard;
