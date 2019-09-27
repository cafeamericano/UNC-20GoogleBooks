import React, { Component } from "react";

class Searchbox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="card mb-3">
        <div class="card-body">
          <form class="form">
            <h6>Search for a Book</h6>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Title"
                name="keywords"
                onChange={this.props.handleInputChange}
                value={this.props.value}
              />
            </div>
            <div className="text-right">
              <button
                onClick={this.props.handleFormSubmit}
                type="submit"
                class="btn btn-primary mb-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Searchbox;
