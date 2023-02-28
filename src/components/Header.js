import React, {useState} from "react";
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './Header.css';
import Dropdown from './Dropdown';
import { SiTailwindcss } from 'react-icons/si';
import { FcMenu } from 'react-icons/fc';
import { FiMenu } from 'react-icons/fi';
import { RiArrowDropDownLine } from 'react-icons/ri';


function Header() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    };
    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(false);
        }
    };

    return(
    <>
    <nav className="navbar">
        <Link to='/'
        className="navbar-logo">
        <SiTailwindcss/>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ? <FcMenu/> : <FiMenu/>} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item"
                onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}>
                <Link to='/solutions' className="nav-links" onClick={closeMobileMenu}>
                    Solutions <RiArrowDropDownLine/>
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/pricing' className="nav-links" onClick={closeMobileMenu}>
                Pricing
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/docs' className="nav-links" onClick={closeMobileMenu}>
                Docs
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/more' className="nav-links" onClick={closeMobileMenu}>
                More <RiArrowDropDownLine/>
                </Link>
                {dropdown && <Dropdown/>}
            </li>
            
            <li className="nav-item">
                <Link to='/sign-up' className="nav-links-mobile" onClick={closeMobileMenu}>
                Sign up
                </Link>
            </li>
        </ul>

        
        <li className="nav-item">
                <Link to='/sign-in' className="nav-links" onClick={closeMobileMenu}>
                Sign in 
                </Link>
            </li>
        <Button/>
    </nav>
    </>
    );
}

export default Header;