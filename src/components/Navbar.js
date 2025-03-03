import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const media = {
  mobile: '@media (max-width: 768px)',
  tablet: '@media (min-width: 769px) and (max-width: 1024px)',
};

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
  
  ${media.tablet} {
    height: 60px;
  }
`;

const NavLogo1 = styled(NavLink)`
  margin-top: 3.5px;
  margin-right: auto;
`;

const NavLogo2 = styled(NavLink)`
  display: none;

  ${media.mobile} {
    display: block;
`;

const LogoImg = styled.img`
  height: 40px;
  width: 40px;
  object-fit: cover;

  ${media.mobile} {
    &.open {
    margin-left: 2rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    height: 90px; 
    width: 90px;
    }
  }

  ${media.tablet} {
    height: 60px;
    width: 60px;
  }
`;

const HamburgerLineStyle = `
  width: 25px;
  height: 2px;
  background-color: white;
  border-radius: 2px;
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
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0);
    width: 100%; 
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    transform: translateX(-100%);
    opacity: 0;
    transition: transform 0.7s ease-in-out, opacity 0.5s ease-in-out,
    z-index: 999;
    padding-top: 1rem;

    &.open {
      transform: translateX(0);
      opacity: 1;
      transition: transform 0.7s ease-in-out, opacity 0.1s;
    }
  }

  ${media.tablet} {
    margin-left: 28rem;
  }
`;

const NavLinkItem = styled.li`
  ${media.mobile} {
    margin: 1rem 0;
    font-size: 1rem;
    width: 100%;
  }
  
  ${media.tablet} {
    font-size: 1.5rem;
    margin: -0.8rem;
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
    box-shadow: 0px 3px 0px 0px #006994; 
    padding-bottom: 0.2rem;
  }

  ${media.mobile} {
    margin: 0;
    margin-left: 1.5rem;
    width: fit-content; 
    text-align: left; 
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

// The top and bottom lines of the hamburger menu are rotated to form an X shape when the menu is open.  
const HamburgerLineTop = styled(HamburgerLine)`
  transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'};
`;
const HamburgerLineMiddle = styled(HamburgerLine)`
  opacity: ${({ $isOpen }) => $isOpen ? 0 : 1};
`;
const HamburgerLineBottom = styled(HamburgerLine)`
  transform: ${({ $isOpen }) => $isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'};
`;

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (path) => {
    if (location.pathname !== path) {
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <Nav>
      <NavLogo1 to="/personal-website">
        <LogoImg src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="Logo" />
      </NavLogo1>

      <HamburgerMenu onClick={toggleMobileMenu}>
        <HamburgerLineTop $isOpen={isMobileMenuOpen} />
        <HamburgerLineMiddle $isOpen={isMobileMenuOpen} />
        <HamburgerLineBottom $isOpen={isMobileMenuOpen} />
      </HamburgerMenu>

      <NavLinks className={isMobileMenuOpen ? 'open' : ''}>
        {/* This is the secondary logo shown only in the mobile menu (Hamburger menu). It does not appear in the web version. */}
        <NavLogo2 to="/personal-website" className={isMobileMenuOpen ? 'open' : ''} onClick={() => handleNavLinkClick('/personal-website')}>
          <LogoImg src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="Logo" className={isMobileMenuOpen ? 'open' : ''} />
        </NavLogo2>

        <NavLinkItem>
          <StyledNavLink to="/personal-website" end className={({ isActive }) => isActive ? "active" : ""} onClick={() => handleNavLinkClick('/personal-website')}>
            Home
          </StyledNavLink>
        </NavLinkItem>
        <NavLinkItem>
          <StyledNavLink to="/personal-website/about" className={({ isActive }) => isActive ? "active" : ""} onClick={() => handleNavLinkClick('/personal-website/about')}>
            About
          </StyledNavLink>
        </NavLinkItem>
        <NavLinkItem>
          <StyledNavLink to="/personal-website/projects" className={({ isActive }) => isActive ? "active" : ""} onClick={() => handleNavLinkClick('/personal-website/projects')}>
            Projects
          </StyledNavLink>
        </NavLinkItem>
        <NavLinkItem>
          <StyledNavLink to="/personal-website/contact" className={({ isActive }) => isActive ? "active" : ""} onClick={() => handleNavLinkClick('/personal-website/contact')}>
            Contact
          </StyledNavLink>
        </NavLinkItem>
      </NavLinks>
    </Nav >
  );
}

export default Navbar;