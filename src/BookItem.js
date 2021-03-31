import React, { Component } from 'react'
import styled from 'styled-components'




class BookItem extends Component {
  state = {
    value: this.props.shelf,
  }

  handleChange = (e) => {
    e.preventDefault();
    const id = this.props.id;
    const shelf = e.target.value;
    const title = this.props.title;
    const author = this.props.author;
    const imageURL = this.props.imageURL;
    this.props.updateBooks(id, shelf, title, author, imageURL);
  }

  render() {
    const { imageURL, title, author, id} = this.props;
    const backgroundImage = 'url(' + imageURL + ')';
    return(
      <BookContainer key={id}>
        <CoverImage style={{backgroundImage: backgroundImage}}/>
        <BookInformation>
          <h5>{title}</h5>
          <p style={{position: 'absolute', bottom: '24px', color: '#F2F2F2', margin:'0', maxWidth:'224px' }}>
          {author}
          </p>
          <MoreButton>
            <img alt="proxy" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/cp0/166386092_538924643764355_406380838846707410_n.png?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=fsAzfUS5C6MAX_LqgMh&_nc_ht=scontent-sjc3-1.xx&_nc_tp=30&oh=ec65886c58c4692d053b0841a26b1c02&oe=6086EF41" style={{position:'absolute', padding:'4px', zIndex:'0'}}/>
            <SelectStatusMenu value={this.state.value} onChange={(e) => this.handleChange(e)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </SelectStatusMenu>
          </MoreButton>

        </BookInformation>
      </BookContainer>

    )
  }
}

const BookContainer = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 48px;
  margin-bottom: 64px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-box-shadow: 0px 2px 30px 0px rgba(158,158,158,0.1);
  -moz-box-shadow: 0px 2px 30px 0px rgba(158,158,158,0.1);
  box-shadow: 0px 2px 30px 0px rgba(158,158,158,0.1);
  &:hover,
  &:focus {
    transform: translateY(-10px);
    -webkit-box-shadow: 0px 2px 30px 0px rgba(158,158,158,0.5);
    -moz-box-shadow: 0px 2px 30px 0px rgba(158,158,158,0.5);
    box-shadow: 0px 2px 30px 0px rgba(158,158,158,0.5);
  }
`

const CoverImage = styled.div`
  width: 100%;
  height: 260px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`

const BookInformation = styled.div`
  background-color: black;
  width: 100%;
  height: 140px;
  color: white;
  padding: 24px;
  position: relative;
`

const MoreButton = styled.button`
  position: absolute;
  bottom: 18px;
  right: 12px;
  padding: 4px;
  border: none;
  background-color: black;
`

const SelectStatusMenu = styled.select`
  width: 32px;
  height: 32px;
  opacity: 0;
`

export default BookItem
