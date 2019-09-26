import React, { Component } from "react";

class Bookcard extends Component {
  constructor(props) {
    super(props);
  }

  deleteAsAFavorite = () => {
    return fetch(`/api/books/${this.props.data._id}`, {
      method: "delete",
      headers: { "Content-Type": "application/json" }
    });
  };

  render() {
    return (
      <div class="card mb-3">
        <div class="card-body">
          <div>{this.props.data.title}</div>
          <img src={this.props.data.image} />
          <div>{this.props.data.description}</div>
          <div>{this.props.data.authors}</div>
          <a href={this.props.data.link}>Read more.</a>
        </div>
        <button onClick={this.deleteAsAFavorite}>
          Delete {this.props.data._id}
        </button>
      </div>
    );
  }
}

export default Bookcard;
