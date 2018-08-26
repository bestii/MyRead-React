import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import './App.css';
import Search from './Search';
import BookList from './BookList';


class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

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

export default BooksApp
