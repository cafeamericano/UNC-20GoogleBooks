import React, { Component } from "react";

class Searchbox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="card mb-3">
        <div class="card-body">
          <form class="form-inline">
            <h6>Search for a Book</h6>
            <div class="form-group mx-sm-3 mb-2">
              <input
                type="text"
                class="form-control"
                placeholder="Title"
                name='activeSearchTerm'
                onChange={this.props.handleInputChange}
                value={this.props.value}
              />
            </div>
            <button
              onClick={this.props.handleFormSubmit}
              type="submit"
              class="btn btn-primary mb-2"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Searchbox;
