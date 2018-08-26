import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import Bookshelf from './BookShelf';

// Functional component BookList
function BookList(props) {

    const { books, changeShelf } = props;
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
                    /* Create BookShelf component for each shelf */
                    shelfs.map((shelf, indx) => {
                        const currentShelfBooks = books.filter(book => book.shelf === shelf.type)
                        return (
                            <Bookshelf key={indx} shelf={shelf} books={currentShelfBooks} changeShelf={changeShelf} />
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

// PropTypes for Booklist component
BookList.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
};

export default BookList;