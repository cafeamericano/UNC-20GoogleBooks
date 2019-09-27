import React, { Component } from "react";
import Resultcard from "./Resultcard";

class Resultbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      searchTerm: ""
    };
  }

  componentDidMount = () => {
    this.grabBooksFromApi();
  };

  componentDidUpdate = () => {
    if (this.props.activeSearchTerm !== this.state.searchTerm) {
      this.setState({ searchTerm: this.props.activeSearchTerm });
      setTimeout(() => {
        this.grabBooksFromApi();
      }, 10);
    }
  };

  grabBooksFromApi = () => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=title:${this.state.searchTerm}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          searchResults: response.items
        });
      });
  };

  render = () => {
    //Ensure that data has been pulled from API
    if (this.state.searchResults === undefined) {
      return (
        <div class="card mb-3 p-3 bg-light">
          <h6>Results</h6>
          <div class="card-body">There are no records to display.</div>
        </div>
      );
    } else if (this.props.activeSearchTerm === "") {
      return (
        <div class="card mb-3 p-3 bg-light">
          <h6>Results</h6>
          <div class="card-body">
            Search for a book to see possible matches appear here.
          </div>
        </div>
      );
    } else {
      let cards = this.state.searchResults.map(item => (
        <Resultcard key={item.id} data={item} />
      ));
      return (
        <div class="card mb-3 p-3 bg-light">
          <h6>Results</h6>
          <div class="card-body">{cards}</div>
        </div>
      );
    }
  };
}

export default Resultbox;
