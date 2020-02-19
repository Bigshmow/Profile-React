import React, { useState, useEffect } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap';
import s from '../styles/app.style';
import '../styles.css';

export const Topnav = (props) => {

  const [focusScroll, setFocusScroll] = useState("")

  const handleScroll = (ele) => {
    setFocusScroll(ele)
    return focusScroll
  }

  useEffect(() =>{
    console.log("This is the id: ", focusScroll)
  },[focusScroll])

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={s.topnav}>
      <Navbar className='shadow' light expand="md">
        <NavbarBrand href="/">{'< DS >'}</NavbarBrand>
        <div className=''>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={e => handleScroll("Portfolio")}>Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/resume">Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={e => handleScroll("Contact")}>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </div>
        <div className='hiddenBig'>
              <NavLink href="https://www.linkedin.com/in/stewart-devin/" className="fa fa-3x fa-linkedin"></NavLink>
              <NavLink href="https://github.com/Bigshmow" className="fa fa-3x fa-github"></NavLink>
        </div>
      </Navbar>
    </div>
  );
}
