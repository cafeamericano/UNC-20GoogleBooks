import React, { Component } from "react";
import Bookcard from "./Bookcard";

class Savedbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedBooks: []
    };
  }

  componentWillMount = () => (
    this.grabSavedFromDatabase()
  );

  componentDidUpdate = () => (
    this.grabSavedFromDatabase()
  );

  grabSavedFromDatabase = () => {
    let url = "/api/books";
    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          savedBooks: response
        });
      });
  };

  render = () => {
    let allSavedBooks = this.state.savedBooks.map(item => (
      <Bookcard data={item} />
    ));
    if (allSavedBooks === undefined) {
      return null;
    } else {
      return (
        <div class="card mb-3">
          <div class="card-body">{allSavedBooks}</div>
        </div>
      );
    }
  };
}

export default Savedbox;
