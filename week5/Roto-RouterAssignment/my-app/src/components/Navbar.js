import React from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
    return(
        <div className="Navbar">
            <ul className="Wrapper">
                <Link className="NavLink" to='/'>Home</Link>
                <Link className="NavLink" to='/about'>About</Link>
                <Link className="NavLink" to='/services'>Services</Link>
            </ul>
        </div>
    )
}

export default Navbar