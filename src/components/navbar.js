import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
    return (
        <div className='navbar'>
            <Link to='/about'>About</Link>

            <span className='navbar-divider'>\</span>

            <Link to='/ambitions'>Ambitions</Link>

            <span className='navbar-divider'>\</span>

            <Link to='/education'>Education</Link>

            <span className='navbar-divider'>\</span>

            <Link to='/experience'>Experience</Link>

            <span className='navbar-divider'>\</span>

            <Link to='/projects'>Projects</Link>
        </div>
    )
}
