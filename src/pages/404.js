import React from 'react'
import MainLayout from '../components/mainlayout'

export default function NotFound() {
    return (
        <MainLayout>
            <div className='not-found-content'>
                <h1 className='fade-in'>Woah there!</h1>
                <p>Looks like you've taken a wrong turn.</p>
                <p>No worries, just select a page up there to make it back.</p>
            </div>
        </MainLayout>
    )
}
