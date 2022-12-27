import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <MainHeader>
      <NavLink to={'/'} >
        <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png" alt="logo" />
      </NavLink> 
    </MainHeader>
  )
}

const MainHeader = styled.header`
height: 10rem;
background-color:  ${({theme})=> theme.colors.bg };
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
.logo{
  height: 5rem;
}
`

export default Header