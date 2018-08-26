import React from 'react';
import PropTypes from 'prop-types'

// SelectShelf Functional component
function SelectShelf(props) {

    const { book, books, changeShelf } = props;

    // Set the default value for currentShelf as 'none'
    let currentShelf = 'none';

    // Incase the book is already is users shelf set the value based on the books shelf
    for (let item of books) {
        if (item.id === book.id) {
            currentShelf = item.shelf
            break;
        }
    }

    return (
        <div className="book-shelf-changer">
            <select onChange={(event) => changeShelf(book, event.target.value)}
                defaultValue={currentShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
}

// PropTypes for SelectShelf component
SelectShelf.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
};

export default SelectShelf;