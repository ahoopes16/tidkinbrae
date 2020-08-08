import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
    return (
        <div className='navbar slide-in-top'>
            <Link to='/about'>About Me</Link>

            <span className='navbar-divider'>\</span>

            <Link to='/ambitions'>Ambitions & Goals</Link>

            <span className='navbar-divider'>\</span>

            <Link to='/education'>Education</Link>

            <span className='navbar-divider'>\</span>

            <Link to='/experience'>Experience</Link>

            <span className='navbar-divider'>\</span>

            <Link to='/projects'>Personal Projects</Link>
        </div>
    )
}
