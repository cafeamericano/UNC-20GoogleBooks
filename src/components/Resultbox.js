import React, { Component } from "react";
import Resultcard from "./Resultcard";

class Resultbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    };
  }

  componentWillMount = () => this.grabBooksFromApi();

  grabBooksFromApi = () => {
    let searchTerms = this.props.activeSearchTerm;
    let url = `https://www.googleapis.com/books/v1/volumes?q=title:${searchTerms}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          searchResults: response.items
        });
      });
  };

  render = () => {
    //Ensure that data has been pulled from API
    if (this.state.searchResults.length !== 0) {
      console.log(this.state.searchResults[0].volumeInfo.title);
    }
    let cards = this.state.searchResults.map(item => (
      <Resultcard data={item} />
    ));
    return (
      <div class="card mb-3 p-3">
        <h6>Results</h6>
        <div class="card-body">{cards}</div>
      </div>
    );
  };
}

export default Resultbox;
