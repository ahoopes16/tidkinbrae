import React from 'react'

export default function Title({ children }) {
    return (
        <div className='title-container'>
            <h1 className='title fade-in'>{children}</h1>
        </div>
    )
}
