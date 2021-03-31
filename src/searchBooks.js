import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import BackIcon from './icons/arrow-back.svg';
import BooksGrid from './BooksGrid'




class SearchBook extends Component {

  handleChange = (e) => {
    e.preventDefault();
    if (e.target.value !== '') {
      this.props.searchQuery(e.target.value);
    } else {
      this.props.clearQuery();
    }
  }

  render() {
    const { collection, updateBooks } = this.props;
    return(
      <div>
        <SearchContainer>
            <Link to='/'>
              <img src={BackIcon} alt="React Logo" style={{width: '48px', height: '48px', marginRight:'24px'}}/>
            </Link>
          <SearchBar onChange={(e) => this.handleChange(e)}/>
        </SearchContainer>
        {collection.length === 0
          ? <p>it's empty</p>
          : <BooksGrid books={collection} updateBooks={updateBooks}/>}
      </div>

    )
  }
}

const SearchContainer = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  margin-bottom: 64px;
`

const SearchBar = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  padding: 24px;
`





export default SearchBook
