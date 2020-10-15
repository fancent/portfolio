import React, { useState }  from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Logo, LogoSelected } from '../images';
import { showNavLinks, showDrawer, hideDrawer } from '../animation';

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
  const [active, setActive] = useState(false);

  const showDrawer = () => {
    setActive(!active);
    console.log(active)
  }

  const renderNavItems = () => {
    return navs.map(({ link, text }) => {
      return (
        <NavItem key={link}>
          <NavText to={link} $active={pathname === link} onClick={showDrawer}><p>{text}</p></NavText>
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
      <NavList $active={active}>
        {renderNavItems()}
      </NavList>
      <Burger onClick={showDrawer}>
        <Line1 $active={active}/>
        <Line2 $active={active}/>
        <Line3 $active={active}/>
      </Burger>
    </NavBarWrapper>
  );
}

const Burger = styled.div`
  display: none;
  cursor: pointer;
  

  > div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px;
    transition: all 0.3s ease;
  }

  @media (max-width: 752px) {
    display: block;
  }
`

const Line1 = styled.div`
  transform: ${prop => prop.$active ? 'rotate(-45deg) translate(-5px,6px)' : ''};
`
const Line2 = styled.div`
  opacity: ${prop => prop.$active ? '0' : '100%'};
`
const Line3 = styled.div`
  transform: ${prop => prop.$active ? 'rotate(45deg) translate(-5px,-6px)' : ''};
`

const NavBarWrapper = styled.nav`
  display: flex;
  margin: auto;
  height: 10vh;
  width: 90%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 752px) {
    overflow: hidden;
  }
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

  @media (max-width: 752px) {
    justify-content: start;
    position: absolute;
    right: 0px;
    height: 90vh;
    top: 10vh;
    background-color: #171717;
    margin: 0;
    padding: 0;
    flex-direction: column;
    align-items: center;
    z-index: 100;
    width: 50%;
    // display: ${props => props.$active ? 'flex' : 'none'};
    // opacity ${props => props.$active ? '100%' : '0%'};
    transform:  translateX(${props => props.$active ? '0%' : '100%'});
    transition: transform 0.5s ease-in;
    // animation: ${props => props.$active ? showDrawer : hideDrawer} 0.5s ease-in;

    > li {
      animation: ${props => props.$active ? showNavLinks : ''} 0.5s ease forwards 0.7s;
    }
  }
  
`

const NavItem = styled.li`
  display: flex;
  height: 60%;
  width: 33%;
  align-items: center;
  margin: 0 1rem 0 1rem;
  transition: 0.3s;

  @media (max-width: 752px) {
    opacity: 0;
    height: auto;
  }
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