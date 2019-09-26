import React, { Component } from "react";

class Bookcard extends Component {
  constructor(props) {
    super(props);
  }
  addBookToDatabase = () => {
    return fetch("/api/books", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: this.props.data.volumeInfo.title,
        image: this.props.data.volumeInfo.imageLinks.smallThumbnail,
        description: this.props.data.volumeInfo.description,
        authors: this.props.data.volumeInfo.authors,
        link: this.props.data.selfLink
      })
    });
  };

  render() {
    return (
      <div class="card mb-3">
        <div class="card-body">
          <div>{this.props.data.volumeInfo.title}</div>
          <img src={this.props.data.volumeInfo.imageLinks.smallThumbnail} />
          <div>{this.props.data.volumeInfo.description}</div>
          <div>{this.props.data.volumeInfo.authors}</div>
          <a href={this.props.data.selfLink}>Go to book.</a>
          <button onClick={this.addBookToDatabase}>Add to Favorites</button>
        </div>
      </div>
    );
  }
}

export default Bookcard;
