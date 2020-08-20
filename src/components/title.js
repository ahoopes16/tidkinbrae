import React from 'react'

export default function Title({ children }) {
    return (
        <div className='title'>
            <h1 className='fade-in'>{children}</h1>
        </div>
    )
}
