import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Logo, LogoSelected } from '../images';

const navs = [
  {
    link: '/about',
    text: 'About'
  },
  {
    link: '/project',
    text: 'Projects'
  },
  {
    link: '/experience',
    text: 'Experience'
  },
]

function NavBar() {
  let pathname = useLocation().pathname;

  const renderNavItems = () => {
    return navs.map(({ link, text }) => {
      return (
        <NavItem key={link}>
          <NavText to={link} $active={pathname === link}><p>{text}</p></NavText>
        </NavItem>
      )
    })
  }

  return (
    <NavBarWrapper>
      <LogoWrapper>
          <Link to="/">
            <img src={Logo} height="50" alt="Logo"/>
          </Link>
      </LogoWrapper>
      <NavList>
        {renderNavItems()}
      </NavList>
    </NavBarWrapper>
  );
}

const NavBarWrapper = styled.nav`
  display: flex;
  margin: auto;
  height: 10vh;
  width: 90%;
  justify-content: space-between;
  align-items: center;
`

const LogoWrapper = styled.div`
  height: 50px;
  width: auto;
  background-image: url(${LogoSelected});
  background-size: cover;
  img {
    transition: opacity .6s ease;
    -moz-transition: opacity .6s ease;
    -webkit-transition: opacity .6s ease;
  }
  img:hover {
    opacity:0;
  }
`

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 40%;
  height: 100%;
  list-style: none;
  align-items: center;
`

const NavItem = styled.li`
  display: flex;
  height: 60%;
  width: 33%;
  align-items: center;
  margin: 0 1rem 0 1rem;
  transition: 0.3s;
`

const NavText = styled(Link)`
  display: block;
  color: ${props => props.$active ? "#f73859" : "#dbedf3"};
  font-weight: 700;
  text-decoration: none;
  width: 100%;
  text-align: center;
  transition: 0.5s;
  &:hover {
    color: #f73859;
  }
`

export default NavBar;