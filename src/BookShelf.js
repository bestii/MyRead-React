import React from 'react';
import PropTypes from 'prop-types'
import Book from './Book';

function BookShelf(props) {
    const { books, shelf } = props;
    return (
        <div className="bookshelf" >
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books.map(book => (
                            <Book key={book.id} book={book} />
                        ))
                    }
                </ol>

            </div>
        </div>
    )
}
BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.object.isRequired
}
export default BookShelf;