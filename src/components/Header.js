import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        {/* <img src="./images/logo.png" alt="my logo img" /> */}

        <h2 style = {{fontSize : '4rem'}} > <span style = {{color : 'red' , fontSize : '8rem'}} >S</span>ujo <span style = {{color : 'red' , fontSize : '8rem'}} >S</span>tore</h2>
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 5rem;
  }
`;
export default Header;