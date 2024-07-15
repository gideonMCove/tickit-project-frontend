import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
import DataContext from '../DataContext'

const NavBar = () => {
    
    return (
        <div className="NavBar">
            <Link to="/"> Home </Link>
            
        </div>
    )
}

export default NavBar