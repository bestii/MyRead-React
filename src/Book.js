import React from 'react';
import PropTypes from 'prop-types'
import SelectShelf from './SelectShelf';

// Functional Component Book
function Book(props) {

    const { book, books, changeShelf } = props;
    const thumbnail = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "https://www.freeiconspng.com/uploads/no-image-icon-4.png";
    const title = book.title ? book.title : "No title available";

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                        style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}>
                    </div>
                    <SelectShelf book={book} books={books} changeShelf={changeShelf} />
                </div>
                <div className="book-title">{title}</div>
                {
                    /* Check for authors and render each on separate line if they exist*/
                    book.authors && book.authors.map((author, index) => (
                        <div className="book-authors" key={index}>{author}</div>
                    ))
                }
            </div>

        </li>
    )
}

// PropTypes for Book component
Book.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
};

export default Book;