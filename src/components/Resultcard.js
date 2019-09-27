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
        link: this.props.data.volumeInfo.previewLink
      })
    });
  };

  render() {
    return (
      <div class="card mb-3">
        <div class="card-body">
          <div class="row">
            <div className="col-6 text-left">
              {this.props.data.volumeInfo.title}
            </div>
            <div className="col-6 text-right">
              <a href={this.props.data.volumeInfo.previewLink}><div className='btn btn-secondary ml-2'>View</div></a>
              <button className='btn btn-secondary ml-2' onClick={this.addBookToDatabase}>Save</button>
            </div>
          </div>
          <div class="row mb-3">
            <div className="col-12 text-left">
              <small>{this.props.data.volumeInfo.authors}</small>
            </div>
          </div>
          <div class="row">
            <div className="col-2 text-left">
              <img src={this.props.data.volumeInfo.imageLinks.smallThumbnail} />
            </div>
            <div className="col-10 text-left">
              {this.props.data.volumeInfo.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bookcard;
