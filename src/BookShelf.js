import React from 'react';
import PropTypes from 'prop-types'
import Book from './Book';

// Functional Component BookShelf
function BookShelf(props) {
    const { books, shelf, changeShelf } = props;
    return (
        <div className="bookshelf" >
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        /* Create a Book component for each book in the shelf */
                        books.map(book => (
                            <Book key={book.id} book={book} books={books} changeShelf={changeShelf} />
                        ))
                    }
                </ol>

            </div>
        </div>
    )
}

//PropTypes for BookShelf
BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
};

export default BookShelf;