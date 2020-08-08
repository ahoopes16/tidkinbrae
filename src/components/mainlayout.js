import React from 'react'

export default function MainLayout({ children }) {
    return (
        <div>
            <div className='navbar'></div>
            <div className='content'>
                {children}
            </div>
        </div>
    )
}
