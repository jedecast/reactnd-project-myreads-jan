import React from 'react'
import * as BooksAPI from './BooksAPI'
import BooksGrid from './BooksGrid'
import NavMenu from './navMenu'
import SearchBooks from './searchBooks'

import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {

  state = {
    books: [],
    collection: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

//send author, title, and image url as well?
  updateBooks = (id, shelfChange, title, author, imageURL) => {
    console.log(id, shelfChange, title, author, imageURL)
    BooksAPI.update(id, shelfChange)
      .then(() => {
        this.setState((currentState) => ({
          books: [
            ...currentState.books,
            ///ifstatement to see if the book already exists in my library, if yes, change the shelf, if not add a new book and change the shelf
            currentState.books.find((book) => book.id === id) ?
              currentState.books.find((book) => (
                book.id === id
              )).shelf = shelfChange :
              {
                id: id,
                shelf: shelfChange,
                title: title,
                authors: [author],
                imageLinks: { thumbnail: imageURL },
              }
          ]
        }))
    })
  }

////PUT COMMENTS SO I CAN UNDERSTAND THEM IN THE FUTURE ON WHAT EACH LINE DOES
  searchQuery = (query) => {
    BooksAPI.search(query)
      .then((collection) => {
        console.log(collection.length);
        ///INSERT A BOOLEAN HEre CHECKING FOR NULL/UNDEFINED
        if (collection.length == undefined) {
          console.log('hehe its empty')
        } else {
        this.setState((currentState) => ({
          collection: collection.map((colBook) => ({
            ...colBook,
            shelf: currentState.books.find((book) => book.id === colBook.id) ?  currentState.books.find((book) => book.id === colBook.id).shelf  : 'none'
          }))
          ///HOW TO SYNC w/ STATE?
          }))
        }
      })
  }

  clearQuery = () => {
    this.setState(() => ({
      collection: []
    }))
  }

  render() {
    const currentlyReading = this.state.books.filter((book) => (
      'currentlyReading' === book.shelf
    ));
    const wantToRead = this.state.books.filter((book) => (
      'wantToRead' === book.shelf
    ));
    const read = this.state.books.filter((book) => (
      'read' === book.shelf
    ));

    return (
      <Container fluid style={{maxWidth: '1440px', marginTop:'124px'}}>
      <Route path="/add" render={() => (
        <SearchBooks searchQuery={this.searchQuery} clearQuery={this.clearQuery} collection={this.state.collection} updateBooks={this.updateBooks}/>
        )}
      />
        <Route exact path="/" render={() => (
          <NavMenu clearQuery={this.clearQuery} />
          )}
        />

        <Route exact path="/" render={() => (
          <BooksGrid books={currentlyReading} sectionTitle='Currently Reading' updateBooks={this.updateBooks}/>
          )}
        />

        <Route exact path="/" render={() => (
          <BooksGrid books={wantToRead} sectionTitle='Want to Read' updateBooks={this.updateBooks}/>
          )}
        />

        <Route exact path="/" render={() => (
          <BooksGrid books={read} sectionTitle='Read' updateBooks={this.updateBooks}/>          )}
        />
      </Container>
    )
  }
}

export default BooksApp
