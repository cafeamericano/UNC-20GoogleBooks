import React, { Component } from "react";

class Bookcard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="card mb-3">
        <div class="card-body">
          <div>{this.props.data.volumeInfo.title}</div>
          <img src={this.props.data.volumeInfo.imageLinks.smallThumbnail} />
          <div>{this.props.data.volumeInfo.description}</div>
          <a href={this.props.data.selfLink}>Go to book.</a>
        </div>
      </div>
    );
  }
}

export default Bookcard;
