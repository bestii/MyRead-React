import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book';

class Search extends Component {

    state = {
        query: '',
        resultBooks: [],
        searchErorr: false
    }

    updateQuery = (query) => {
        this.setState({ query: query })
    }

    updateResults = (resultBooks, searchError) => {
        this.setState({ resultBooks: resultBooks, searchErorr: searchError })
    }

    searchBooks = (event) => {
        const query = event.target.value.trim();
        this.updateQuery(query);
        if (query) {
            BooksAPI.search(query).then((books) => {
                books.length > 0 ? this.updateResults(books, false) : this.updateResults([], true);
            })
        } else {
            this.updateResults([], false)
        }
    }

    render() {
        const { query, resultBooks, searchErorr } = this.state;
        const { books, changeShelf } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={this.searchBooks} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            resultBooks.map(book => (
                                <Book key={book.id} book={book} books={books} changeShelf={changeShelf} />
                            ))
                        }
                    </ol>
                    {
                        searchErorr && (
                            <div>
                                <div>
                                    <h3>No matching results for the current search. Please try a different keyword for search.</h3>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default Search;