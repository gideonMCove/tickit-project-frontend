import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../tickit-high-resolution-logo-transparent.png'
import './Nav.css'

const Nav = () => {
    return (
        <nav className='nav'>
            <img src={logo} alt='Tickit Logo' className='nav-logo' />
            <div className='nav-links'>
                <Link to='/'>Home</Link>
                <Link to='/concerts'>Concerts</Link>
                <Link to='/sports'>Sports</Link>
                <Link to='/comedy'>Comedy</Link>
            </div>
        </nav>
    );
}

export default Nav;
