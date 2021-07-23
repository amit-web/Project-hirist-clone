import React, { useState } from 'react'
import {Link} from "react-router-dom"
import './Navbar.css';
import { Dropdown } from './Dropdown'

export const Navbar = () => {
    const [click, setClick] = useState(false)
    const [dropdown,setDropdown] = useState(false)
    
    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)


     const onMouseEnter = () => {
    if (window.innerWidth > 960) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
    };

    const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
    
    return (
        <>
            <nav className='navbar'>
                <Link to='/dashbord' className='navbar-logo'>
                    EPIC
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ?"fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'
                    onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
                        <Link to='/ser' className='nav-links' onClick={closeMobileMenu}>
                            Serices <i className='fas fa-caret-down'></i>
                        </Link>
                        {dropdown && <Dropdown/>}
                    </li>

                      <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                            Contact us
                        </Link>
                    </li>
                      <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Signup
                        </Link>
                    </li>
                </ul>
            </nav>
            </>
    )
}
