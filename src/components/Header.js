import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Navbar from './Navbar';
const Header = () => {
  return (
    <MainHeader>
      <NavLink to={'/'} >
        <img className='logo' src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png" alt="logo" />
      </NavLink>
      <Navbar/> 
    </MainHeader>
  )
}

const MainHeader = styled.header`
height: 10rem;
background-color:  ${({theme})=> theme.colors.bg };
display: flex;
padding: 0rem 1.5rem;
justify-content: space-between;
align-items: center;
position: relative;
.logo{
  height: 5rem;
}
`

export default Header