import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BookList extends Component {

    render() {
        const { books } = this.props;
        const shelfs = [
            { type: 'currentlyReading', title: 'Currently Reading' },
            { type: 'wantToRead', title: 'Want to Read' },
            { type: 'read', title: 'Read' }]
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {
                        shelfs.map((shelf, indx) => {
                            const currentShelfBooks = books.filter(book => book.shelf === shelf.type)
                            return (
                                <div className="bookshelf" key={indx}>
                                    <h2 className="bookshelf-title">{shelf.title}</h2>
                                    <div className="bookshelf-books">
                                        {currentShelfBooks.map((shelfBook) => (
                                            <li key={shelfBook.key}></li>
                                        ))}
                                    </div>
                                </div>)
                        })
                    }
                </div>

                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default BookList;