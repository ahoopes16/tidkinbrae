import React from 'react'
import { Link } from 'gatsby'

export default function Navbar({ selectedTab }) {
    const getSelectedClass = sectionName => selectedTab === sectionName ? 'selected' : ''

    return (
        <div className='navbar'>
            <span className={getSelectedClass('about')}>
                <Link to='/about'>About</Link>
            </span>

            <span className='navbar-divider'>\</span>

            <span className={getSelectedClass('ambitions')}>
                <Link to='/ambitions'>Ambitions</Link>
            </span>

            <span className='navbar-divider'>\</span>

            <span className={getSelectedClass('education')}>
                <Link to='/education'>Education</Link>
            </span>

            <span className='navbar-divider'>\</span>

            <span className={getSelectedClass('experience')}>
                <Link to='/experience'>Experience</Link>
            </span>

            <span className='navbar-divider'>\</span>

            <span className={getSelectedClass('projects')}>
                <Link to='/projects'>Projects</Link>
            </span>
        </div>
    )
}
