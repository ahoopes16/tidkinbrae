import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
    return (
        <div className='navbar'>
            <Link to='/about'>About Me</Link>
            <Link to='/ambitions'>Ambitions & Goals</Link>
            <Link to='/education'>Education</Link>
            <Link to='/experience'>Experience</Link>
            <Link to='/projects'>Personal Projects</Link>
        </div>
    )
}
