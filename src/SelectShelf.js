import React from 'react';
import PropTypes from 'prop-types'

function SelectShelf(props) {
    const {book , changeShelf} = props;
    let currentShelf;

    if(book.shelf){
        currentShelf = book.shelf;
    }else{
        currentShelf = 'none';
    }

    return (
        <div className="book-shelf-changer">
            <select  onChange={(event) => changeShelf(book, event.target.value)}
                     defaultValue = { currentShelf }>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
}
SelectShelf.propTypes={
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
}
export default SelectShelf;