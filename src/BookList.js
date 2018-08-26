import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import Bookshelf from './BookShelf';

function BookList(props) {

        const { books } = props;
        const shelfs = [
            { type: 'currentlyReading', title: 'Currently Reading' },
            { type: 'wantToRead', title: 'Want to Read' },
            { type: 'read', title: 'Read' }];

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
                                <Bookshelf key={indx} shelf={shelf} books={currentShelfBooks} />
                            )
                        })
                    }
                </div>

                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    
}

BookList.propTypes = {
    books:PropTypes.array.isRequired
}

export default BookList;