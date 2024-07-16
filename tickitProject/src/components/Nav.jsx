import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import { NavDropdown } from 'react-bootstrap'
// import DataContext from '../DataContext'

const Nav = () => {
    
    return (
    
        <nav className='nav'>
            <Link to='/'> Home </Link>
            <Link to='/concerts'>Concerts</Link>
            <Link to='/sports'>Sports</Link>            
        </nav>
    
    )
}

export default Nav