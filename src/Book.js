import React from 'react';
import PropTypes from 'prop-types'
import SelectShelf from './SelectShelf';

function Book(props) {
    const { book } = props;
    const coverImg = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api";
    const title = book.title ? book.title : "No title available";
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                        style={{ width: 128, height: 193, backgroundImage: `url(${coverImg})` }}>
                    </div>
                    <SelectShelf/>
                </div>
                <div className="book-title">{title}</div>
                    { 
                        /* Check for authors and render each on separate line if exist*/
                        book.authors && book.authors.map((author, index) => (
                            <div className="book-authors" key={index}>{author}</div>
                        ))
                    }
            </div>

        </li>
    )
}
Book.propType = {
    book: PropTypes.object.isRequired
}
export default Book;