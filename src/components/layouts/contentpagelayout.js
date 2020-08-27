import React from 'react'

export default function ContentPageLayout({ children }) {
    return (
        <div className='content-page'>
            <div className='content-container'>
                {children}
            </div>
        </div>
    )
}
