import React from 'react';
import { NavLink } from 'reactstrap';
import s from '../styles/app.style';
import '../styles.css';

export const Sidebar = (props) => {

    return (
        <div style={s.sidebar} className='hiddenMedia'>
            <NavLink href="https://www.linkedin.com/in/stewart-devin/" className="fa fa-3x fa-linkedin"></NavLink>
              <NavLink href="https://github.com/Bigshmow" className="fa fa-3x fa-github"></NavLink>
        </div>
        );
}