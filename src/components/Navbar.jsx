import React,{useState} from 'react'
import {Link, NavLink} from "react-router-dom"
import "./Navbar.css";
import LoginDropdown from './LoginDropdown';

export const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);
  return (
    <nav>
        <Link to="/" className='title'>Find Your Need</Link>
        <div className='menu'onClick={() => {
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/services">Services</NavLink>
            </li>
            <li>
                <NavLink to="/contact">contact us</NavLink>
            </li>
            <li>
                <NavLink to="/login"><LoginDropdown/></NavLink>
            </li>
        </ul>
    </nav>
  )
}
