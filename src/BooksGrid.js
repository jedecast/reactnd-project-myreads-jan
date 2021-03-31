import React, { Component } from 'react'
import styled from 'styled-components'
import BookItem from './BookItem'


class BooksGrid extends Component {

  render() {
    const { books, sectionTitle, updateBooks } = this.props;
    return(
      <GridContainer>
        <SectionTitle>
          {sectionTitle}
        </SectionTitle>
        {books.map((book) => (
          <BookItem imageURL={ book.imageLinks ? book.imageLinks.thumbnail : 'https://media1.tenor.com/images/56ba88207bc9f85fbf8e90435caa6f7c/tenor.gif?itemid=17039796'} title={book.title} author={book.authors} id={book.id} shelf={book.shelf} updateBooks={updateBooks} key={book.id}/>

        ))}
      </GridContainer>

    )
  }
}

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const SectionTitle = styled.div`
  width: 100%;
  border-bottom: 1px solid #E0E0E0;
  margin-bottom: 64px;
  padding-bottom: 16px;
  font-size: 18px;
  font-weight: 600;
`

export default BooksGrid
