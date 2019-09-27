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
          <div class="row">
            <div className="col-6 text-left">{this.props.data.title}</div>
            <div className="col-6 text-right">
              <a href={this.props.data.link}>
                <div className="btn btn-secondary ml-2">View</div>
              </a>
              <button
                className="btn btn-secondary ml-2"
                onClick={this.deleteAsAFavorite}
              >
                Delete
              </button>
            </div>
          </div>
          <div class="row mb-3">
            <div className="col-12 text-left">
              <small>{this.props.data.authors}</small>
            </div>
          </div>
          <div class="row">
            <div className="col-2 text-left">
              <img src={this.props.data.image} />
            </div>
            <div className="col-10 text-left">
              {this.props.data.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bookcard;
