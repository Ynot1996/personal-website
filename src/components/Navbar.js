import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// 媒體查詢
const media = {
    mobile: '@media (max-width: 768px)',
};

const HamburgerLineStyle = `
  width: 25px;
  height: 2px;
  background-color: white;
  border-radius: 3px;
`;

const Nav = styled.nav`
  width: 100%;
  background: #000;
  color: white;
  padding: 0.5rem 1rem;
  z-index: 1000;
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;

  ${media.mobile} {
    height: auto; 
  }
`;

const NavLogo = styled(NavLink)`
  margin-top: 3.5px;
  margin-right: auto;
`;

const LogoImg = styled.img`
  height: 40px;
  width: 50px;
  object-fit: cover;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0;
  padding-right: 6rem;

  ${media.mobile} {
    display: none;
    position: fixed;
    top: 60px;
    right: 0;
    background-color: rgba(0, 0, 0);
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    z-index: 999;

    &.open {
      display: flex;
      transform: translateX(0);
    }
  }
`;

const NavLinkItem = styled.li`
  ${media.mobile} {
    margin: 1rem 0;
    font-size: 1.5rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  margin: 0 2rem;
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #00aaff;
  }

  &.active {
    border-bottom: 3px solid #006994;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
  z-index: 1001;

  ${media.mobile} {
    display: flex;
    margin-right: 2rem;
  }

  & > div {
    ${HamburgerLineStyle}
  }
`;

const HamburgerLine = styled.div`
  ${HamburgerLineStyle}
`;

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <Nav>
            <NavLogo to="/personal-website">
                <LogoImg src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" />
            </NavLogo>

            <HamburgerMenu onClick={toggleMobileMenu}>
                <HamburgerLine />
                <HamburgerLine />
                <HamburgerLine />
            </HamburgerMenu>

            <NavLinks className={isMobileMenuOpen ? 'open' : ''}>
                <NavLinkItem>
                    <StyledNavLink to="/personal-website" end className={({ isActive }) => isActive ? "active" : ""}>
                        Home
                    </StyledNavLink>
                </NavLinkItem>
                <NavLinkItem>
                    <StyledNavLink to="/personal-website/about" className={({ isActive }) => isActive ? "active" : ""}>
                        About
                    </StyledNavLink>
                </NavLinkItem>
                <NavLinkItem>
                    <StyledNavLink to="/personal-website/projects" className={({ isActive }) => isActive ? "active" : ""}>
                        Projects
                    </StyledNavLink>
                </NavLinkItem>
                <NavLinkItem>
                    <StyledNavLink to="/personal-website/contact" className={({ isActive }) => isActive ? "active" : ""}>
                        Contact
                    </StyledNavLink>
                </NavLinkItem>
            </NavLinks>
        </Nav>
    );
}

export default Navbar;