import React, { useState } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap';
import s from '../styles/app.style';
import '../styles.css';

export const Topnav = (props) => {

  const handleScroll = (ele) => {
    const scroller = (id) => {
      document.getElementById(id).scrollIntoView({behavior:"smooth"});
    }
    switch (ele) {
      case "About":
        scroller("Profile")
        break;
      case "Contact":
        scroller("Contact")
        break;
      case "Portfolio":
        scroller("Portfolio")
        break;
      case "Resume":
        alert("No Resume link just yet!")
        break;
      default:
        break;
    }
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={s.topnav}>
      <Navbar className='shadow' light expand="md">
        <NavbarBrand href="/">{'< DS >'}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink onClick={e => handleScroll("About")}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={e => handleScroll("Portfolio")}>Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={e => handleScroll("Resume")}>Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={e => handleScroll("Contact")}>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <div className='hiddenBig'>
              <NavLink href="https://www.linkedin.com/in/stewart-devin/" className="fa fa-3x fa-linkedin"></NavLink>
              <NavLink href="https://github.com/Bigshmow" className="fa fa-3x fa-github"></NavLink>
        </div>
      </Navbar>
    </div>
  );
}
