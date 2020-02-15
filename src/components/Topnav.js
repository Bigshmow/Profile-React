import React, { useState } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap';
import s from '../styles/app.style';
import '../styles.css';


export const Topnav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={s.topnav}>
      <Navbar className='shadow' light expand="md">
        <NavbarBrand href="/Portfolio">{'< DS >'}</NavbarBrand>
        <div className=''>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/works">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/resume">Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
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