import React from 'react';
import './NavBar.css';

function NavBar(){
    return(
        <div className='navBar'>
            <a href='/'>Logo</a>
            <a href='/'>Hello</a>
            <a href='/'>Landing</a>
            <a href='/'>About Me</a>
            <a href='/'>Resume</a>
            <a href='/'>Projects</a>
            <a href='/'>Contact</a>
        </div>
    )
}
export default NavBar;