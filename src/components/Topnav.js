import React, { useState } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap';
import s from '../styles/app.style';
import '../styles.css';

export const Topnav = (props) => {

  const Resume = require('../assets/Devin_Stewart_Resume.pdf')

  const handleScroll = (ele) => {
    const scroller = (id) => {
      document.getElementById(id).scrollIntoView({behavior:"smooth"});
    }
    switch (ele) {
      case "About":
        scroller("Profile")
        break;
      case "Portfolio":
        scroller("Highlights")
        break;
      case "Skills":
        scroller("Skills")
        break;
      default:
        break;
    }
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={s.topnav}>
      <Navbar className='shadow allNav' light expand="md">
        <NavbarBrand href="/" className="Logo"><img src="https://profile-dms-pictures.s3.amazonaws.com/DS_Logo.png" style={{height:'50px'}}></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto hello" navbar>
            <NavItem>
              <NavLink className="navPoint" onClick={e => handleScroll("About")}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navPoint" onClick={e => handleScroll("Portfolio")}>Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navPoint" onClick={e => handleScroll("Skills")}>Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Resume} target='_blank'>Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="mailto:dstewart88@gmail.com?Subject=Hello%20Devin!" target="_top">Contact</NavLink>
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
