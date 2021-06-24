import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <div className='navBar'>
            <Link to='/'>Logo</Link>
            <Link to='/'>Hello</Link>
            <Link to='/'>Landing</Link>
            <Link to='/'>About Me</Link>
            <Link to='/'>Resume</Link>
            <Link to='/'>Projects</Link>
            <Link to='/'>Contact</Link>
        </div>
    )
}
export default NavBar;