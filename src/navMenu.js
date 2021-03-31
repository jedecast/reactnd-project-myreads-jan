import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


class NavMenu extends Component {

  render() {
    const { clearQuery } = this.props;
    return(
      <NavContainer>
        <h3 style={{fontWeight:'800'}}>MyReads</h3>
        <Link
          to='/add'
          style={{marginLeft:'auto'}}
        >
          <Button onClick={() => clearQuery()}>Add a Book</Button>
        </Link>
      </NavContainer>

    )
  }
}

const NavContainer = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  margin-bottom: 64px;
`



export default NavMenu
