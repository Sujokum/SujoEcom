import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Navbar = () => {
  return (
    <Nav>
      <div className='InnerMainNav' >
        <ul>
            <li>
              <NavLink to={'/'} >
                        Home
              </NavLink>
            </li>
            <li>
              <NavLink to={'/about'} >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={'/products'} >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to={'/contact'} >
              Contact
              </NavLink>
            </li>
            <li className={'btn'} >
              <NavLink   to={'/login'} >
                  Login
              </NavLink>
            </li>
            <li>
              <NavLink className={'cart'} to={'/cart'}>
              <AiOutlineShoppingCart/>
              <span className='cart-items'>0</span>
              </NavLink>
            </li>
        </ul>
      </div>
      </Nav>
  )
}

const Nav = styled.nav`
height: 100%;
width: 30%;
.InnerMainNav{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content : center;
  align-items: center;
}
.InnerMainNav ul {
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;

}
.InnerMainNav ul li{
  font-size: 2rem;
}
.InnerMainNav ul li:hover{
  text-shadow: 1px 1px 2px black;
  cursor: pointer;
}
.btn{
  width: 20% ;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  

  background-color: aqua;
}
.cart{
  font-size: 2.5rem;
}
.cart-items{
  font-size: 1.8rem;
  color: red;
  position: relative;
  top: -40%;
}
`

export default Navbar