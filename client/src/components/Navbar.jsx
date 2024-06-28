import React from 'react'

import styled from 'styled-components'
// import { NavLink } from 'react-router-dom'
import LogoImage from '../utils/Images/Logo.png'
import { NavLink } from 'react-router-dom';
import { FavoriteBorder, FavoriteBorderRounded, SearchRounded, ShoppingCartOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material';

const Nav = styled.div`
  width:100%;
  height:80px;
  // background-color:${(theme) => theme.bg};
  background-color: #666;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1rem;
  position: sticky;
  top:0;
  z-index:10;
  color:white;
`;

const NavbarContainer = styled.div`
  width:100%;
  max-width:1400px;
  padding: 0 24px;
  display:flex;
  gap:14px;
  align-items:center;
  justify-content: space-between;
  font-size:1rem
`;


const NavLogo = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  padding: 0 6px;
  font-weight:500;
  font-size:18px;
  text-decoration:none;
  color:inherit;

`;
const Logo = styled.img`
  height:34px;
`;

const NavItems = styled.div`
  width:100%;
  display:flex;
  justify-content: center;
  align-items:center;
  gap:32px;
  padding: 0 6px;
  list-style: none;
  @media screen and (max-width: 768px) {
    // display: none;
  }

`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 1s slide-in;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.8px solid ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap:2rem;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  padding:0 6px;
  color: ${({ theme }) => theme.primary};
  
`;

const TextButton = styled.div`
  color: ${({ theme }) => theme.secondary};
  text-align: end;
  font-weight:600;
  cursor:pointer;
  font-size:16px;
  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          {/* <img src={LogoImage} alt="" /> */}
          <NavLink to={'/'}>
            <Logo src={LogoImage} />
          </NavLink>
        </NavLogo>
        <NavItems>
          <NavLinkStyled to={'/'}>Home</NavLinkStyled>
          <NavLinkStyled to={'/shop'}>Shop</NavLinkStyled>
          <NavLinkStyled to={'/new_arrivals'}>New Arrivals</NavLinkStyled>
          <NavLinkStyled to={'/orders'}>Orders</NavLinkStyled>
          <NavLinkStyled to={'/contact'}>Contact</NavLinkStyled>
        </NavItems>
        <ButtonContainer>
          <NavLinkStyled to={'/search'}>
            <SearchRounded sx={{ fontSize: "30px" }} />
          </NavLinkStyled>

          <NavLinkStyled to={'/favorites'}>
            <FavoriteBorder sx={{ fontSize: "30px" }} />
          </NavLinkStyled>

          <NavLinkStyled to={'/cart'}>
            <ShoppingCartOutlined sx={{ fontSize: "30px" }} />
          </NavLinkStyled>

          <Avatar sx={{ fontSize: "30px" }}></Avatar>
          <TextButton>LogOut</TextButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar