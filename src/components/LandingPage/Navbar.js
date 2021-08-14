import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderStyle = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-bottom: 2px solid grey;
`
const UlStyle = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
`

const LinkStyle = styled(Link)`
  color: ${(props) => props.theme.darkPurple};
  font-size: 2rem;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    color: white;
  }
`
const DivStyle = styled.div`
  font-size: 2rem;
  background-color: white;
  padding: 0.5rem;
  border-radius: 10%;
  border: 2px solid grey;
  transition: 0.1s ease-in;
  &:hover {
    background-color: ${(props) => props.theme.darkPurple};
    color: white;
  }
`
function Navbar(props) {
  return (
    <HeaderStyle>
      <UlStyle>
        <DivStyle>
          <LinkStyle to="/">Home</LinkStyle>
        </DivStyle>
        <DivStyle>
          <LinkStyle to="/most-transacted">Top 25</LinkStyle>
        </DivStyle>
        <DivStyle>
          <LinkStyle to="/about">About</LinkStyle>
        </DivStyle>
        <DivStyle>
          <LinkStyle to="/login">Login</LinkStyle>
        </DivStyle>
      </UlStyle>
    </HeaderStyle>
  )
}

export default Navbar
