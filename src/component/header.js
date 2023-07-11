import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
          <header >
            
            <nav className='row'>
            <a className='logo'>logo</a>
              <ul>
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"Contact"}>Contact</NavLink>
                </li>
                <li>
                  <NavLink to={"About"}>About</NavLink>
                </li>
              </ul>
            </nav>
          </header>
    
        </>
      );
}

export default Header
