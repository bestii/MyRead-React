import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import './App.css';
import Search from './Search';
import BookList from './BookList';


class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books});
    });
  }

  render() {
    const {books} = this.state;
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
          <BookList books={books}/>
        )}/>
        <Route path="/search" component={Search} />
      </div>
    )
  }
}

export default BooksApp
