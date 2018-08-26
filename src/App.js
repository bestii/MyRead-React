import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import './App.css';
import Search from './Search';
import BookList from './BookList';


class BooksApp extends React.Component {

  // Component state
  state = {
    books: []
  }

  // Called after the component is mounted
  componentDidMount() {
    this.getBooks();
  }

  // Function to get all shelf books 
  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  // Function to update the book shelf
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getBooks();
    })
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <BookList books={books} changeShelf={this.changeShelf} />
        )} />

        <Route path="/search" render={() => (
          <Search books={books} changeShelf={this.changeShelf} />
        )} />

      </div>
    )
  }
}

export default BooksApp;
